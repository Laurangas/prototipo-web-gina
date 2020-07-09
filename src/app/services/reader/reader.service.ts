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
  init = true;

  reproducir() {
    if ( this.pausado ) {
      this.pausado = false;
      this.synth.resume();
    } else {
      if (this.init) {
        this.iniciarRep();
        this.synth.speak( this.rep );
      } else {
        this.synth.pause();
        this.pausado = true;
      }
    }
  }

  iniciarRep() {
    this.init = false;
    document.querySelectorAll('[class="container"]').forEach( e => {
      this.Text += e.textContent;
    });
    this.rep = new SpeechSynthesisUtterance(this.Text);
    this.rep.lang = 'es-MX';
    this.rep.volume = 0.8;
    this.rep.rate = 0.8;
  }
}
