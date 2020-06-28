import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FontSizeService {

  fontSize: number;
  step: number;

  constructor(router: Router) {
    /* recuerda el ultimo tamaño de fuente
    cambia el tamaño de fuente
    y guarda el tamaño de fuente en local storage
    cada vez que cambia de página

    asi consigue consistencia de tamaños
    entre las diferentes páginas y tiene
    la ventaja de recordarlo entre sesiones,
    incluso si se cierra el navegador */
    router.events
    .subscribe(
      (event: NavigationEvent) => {
        if (event instanceof NavigationEnd) {
          this.fontSize = parseInt(localStorage.getItem('lastFontSize'), 10);
          if (isNaN(this.fontSize)) {
            this.fontSize = 0;
          }
          this.step = this.fontSize;
          this.updateFontSize();
          localStorage.setItem('lastFontSize', String(this.fontSize));
        }
      });
  }

  increaseFontSize() {
    this.fontSize += 2;
    localStorage.setItem('lastFontSize', String(this.fontSize));
    this.step = 2;
    this.updateFontSize();
  }

  decreaseFontSize() {
    this.fontSize -= 2;
    localStorage.setItem('lastFontSize', String(this.fontSize));
    this.step = -2;
    this.updateFontSize();
  }

  updateFontSize() {
    // obtener todos los elementos con la clase 'font'size-variable'
    const y = document.getElementsByClassName('font-size-variable') as HTMLCollectionOf<HTMLElement>;
    console.log(y);

    let currentElementFontSize: number;
    let i: number;
    for (i = 0; i < y.length; i++) {
      // obtener tamaño de fuente inicial
      currentElementFontSize = parseInt(y[i].style.fontSize, 10);

      // caso especial de elemento sin tamaño de fuente asignado
      if (isNaN(currentElementFontSize)) {
        currentElementFontSize = parseInt(getComputedStyle(y[i]).getPropertyValue('font-size'), 10);
      }

      // actualiza el tamaño de fuente
      y[i].style.fontSize = currentElementFontSize + this.step + 'px';
    }
  }
}
