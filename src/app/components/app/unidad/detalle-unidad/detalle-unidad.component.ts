import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/crud/unidad/unidad.service';
import { Unidad } from 'src/app/classes/unidad.model';

@Component({
  selector: 'app-detalle-unidad',
  templateUrl: './detalle-unidad.component.html',
  styleUrls: ['./detalle-unidad.component.scss']
})
export class DetalleUnidadComponent implements OnInit {

  displayedColumns: string[] = 
    ['id',
    'numero',
    'modelo',
    'capacidad',
    'marca',
    'rendimiento',
    'llantas',
    'combustible',
    'tipo'];

  unidades: Unidad[];

  constructor(private unidadService: UnidadService) { }

  ngOnInit(): void {
    this.unidadService.getUnidad().subscribe(data => {
      this.unidades = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Unidad
        }
      })
    });
  }

}
