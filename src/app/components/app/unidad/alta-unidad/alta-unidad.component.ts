import { Component, OnInit } from '@angular/core';
import { UnidadService } from 'src/app/services/crud/unidad/unidad.service';
import { Unidad } from 'src/app/classes/unidad.model';

@Component({
  selector: 'app-alta-unidad',
  templateUrl: './alta-unidad.component.html',
  styleUrls: ['./alta-unidad.component.scss']
})
export class AltaUnidadComponent implements OnInit {

  constructor(private unidadService: UnidadService) { }

  crearUnidad(numero: string,
    modelo: string,
    capacidad: string,
    marca: string,
    rendimiento: string,
    llantas: string,
    combustible: string,
    tipo: string) {

      let unidad: Unidad = new Unidad;
      unidad.numero = numero;
      unidad.modelo = modelo;
      unidad.capacidad = capacidad;
      unidad.marca = marca;
      unidad.rendimiento = rendimiento;
      unidad.llantas = llantas;
      unidad.combustible = combustible;
      unidad.tipo = tipo;
      this.create(unidad);
    }

  create(unidad: Unidad) {
    this.unidadService.createUnidad(unidad);
  }

  ngOnInit(): void {
  }

}
