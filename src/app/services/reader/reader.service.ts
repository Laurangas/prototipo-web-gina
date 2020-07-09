import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

  constructor() { }

  Text = '';
  synth = window.speechSynthesis;
  rep: SpeechSynthesisUtterance;
  pausado = false;

  reproducir() {
    if ( this.synth.paused ) {
      this.synth.resume();
    }

    if ( this.synth.speaking ) {
      this.synth.pause();
    }

    if ( !this.synth.speaking ) {
      this.iniciarRep();
      this.synth.speak( this.rep );
    }
  }

  iniciarRep() {
    document.querySelectorAll('[class="container"]').forEach( e => {
      this.Text += e.textContent;
    });
    this.rep = new SpeechSynthesisUtterance(this.Text);
    this.rep.lang = 'es-MX';
    this.rep.volume = 0.8;
    this.rep.rate = 0.8;
  }
}
