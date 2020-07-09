import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { LlantaentradaService } from 'src/app/services/crud/llantaentrada/llantaentrada.service';
import { Llantaentrada } from 'src/app/llantaentrada.model';
@Component({
  selector: 'app-registro-llanta',
  templateUrl: './registro-llanta.component.html',
  styleUrls: ['./registro-llanta.component.scss']
})
export class RegistroLlantaComponent implements OnInit {

  constructor(private llantaEntradaService: LlantaentradaService) { }

  crearLlanta(codigo: string,
    marca: string,
    modelo: string,
    tipo: string,
    tamano: string,
    ancho: string,
    profundidad: string,
    rendimiento: string,
    costo: string,
    cambio: string) {
    let llantaEntrada: Llantaentrada = new Llantaentrada;

    llantaEntrada.codigo = codigo;
    llantaEntrada.marca = marca;
    llantaEntrada.modelo = modelo;
    llantaEntrada.tipo = tipo;
    llantaEntrada.tamano = tamano;
    llantaEntrada.ancho = ancho;
    llantaEntrada.profundidad = profundidad;
    llantaEntrada.rendimiento = rendimiento;
    llantaEntrada.costo = costo;
    llantaEntrada.cambio = cambio;

    this.create(llantaEntrada);
  }

  create(llantaEntrada: Llantaentrada) {
    this.llantaEntradaService.createLlantaEntrada(llantaEntrada);
  }

  ngOnInit(): void {
  }

}
