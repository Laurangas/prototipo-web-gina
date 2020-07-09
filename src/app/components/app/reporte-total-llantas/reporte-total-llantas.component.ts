import { Component, OnInit } from '@angular/core';
import { LlantaentradaService } from 'src/app/services/crud/llantaentrada/llantaentrada.service';
import { Llantaentrada } from 'src/app/llantaentrada.model';

@Component({
  selector: 'app-reporte-total-llantas',
  templateUrl: './reporte-total-llantas.component.html',
  styleUrls: ['./reporte-total-llantas.component.scss']
})
export class ReporteTotalLlantasComponent implements OnInit {

  constructor(private llantaentradaService: LlantaentradaService) { }

  llantas: Llantaentrada[];
  displayedColumns: string[] = ['id',
  'codigo',
  'marca',
  'modelo',
  'tipo',
  'tamano',
  'ancho',
  'profundidad',
  'rendimiento',
  'costo',
  'cambio'];
  
  ngOnInit(): void {
    this.llantaentradaService.getLlantasEntrada().subscribe(data => {
      this.llantas = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Llantaentrada
        }
      })
    });
  }

}
