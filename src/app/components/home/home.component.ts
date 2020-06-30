import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Text = '';
  rep: any;
  pausado = false;
  init = true;

  pictures = [
    {title: 'Llantas en existencia', img: 'example.com/img'},
    {title: 2, img: 'example.com/img'},
    {title: 3, img: 'example.com/img'}
  ];

  folders = [
    {name: 'Llantas en existencia', updated: 'example.com/updated'},
    {name: 2, updated: 'example.com/updated'},
    {name: 3, updated: 'example.com/updated'}
  ];

  notes = [
    {name: 'Llantas en existencia', updated: 'example.com/updated'},
    {name: 2, updated: 'example.com/updated'},
    {name: 3, updated: 'example.com/updated'}
  ];

  columnDefs = [  //definimos las columanas pasandole json
    {headerName: 'Marca', field: 'marca', sortable:true}, // organizar el contenido
    {headerName: 'Modelo', field: 'modelo',filter:true}, // filtrar por
    {headerName: 'Precio', field: 'precio', checkboxSelection:true}// seleccionar
  ];
  rowData = [ //definimos los renglones creando objetos con informacion
    {marca: 'aves', modelo: 'pato', precio: 1234},
    {marca: 'mininos', modelo: 'gato', precio: 4321},
    {marca: 'caninos', modelo: 'perro', precio: 9874},
    {marca: 'caninos', modelo: 'perro', precio: 2344},
  ];


  constructor() { }


  ngOnInit(): void {
  }
  reproducir() {
    if ( this.pausado ) {
      this.pausado = false;
      window.speechSynthesis.resume();
    } else {
      if (this.init) {
        this.iniciarRep();
      }
      window.speechSynthesis.speak( this.rep );
    }
  }

  pausar() {
    window.speechSynthesis.pause();
    this.pausado = true;
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
