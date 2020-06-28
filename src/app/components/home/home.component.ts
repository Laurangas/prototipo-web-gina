import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

}
