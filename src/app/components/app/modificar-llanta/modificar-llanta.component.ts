import { Component, OnInit } from '@angular/core';
import { LlantaentradaService } from 'src/app/services/crud/llantaentrada/llantaentrada.service';
import { Llantaentrada } from 'src/app/llantaentrada.model';

@Component({
  selector: 'app-modificar-llanta',
  templateUrl: './modificar-llanta.component.html',
  styleUrls: ['./modificar-llanta.component.scss']
})
export class ModificarLlantaComponent implements OnInit {

  constructor(private llantaentradaService: LlantaentradaService) { }
  id: string;
  public llantas: Llantaentrada[];
  public llanta: Llantaentrada = {
    id: '',
    codigo: '',
    marca: '',
    modelo: '',
    tipo: '',
    tamano: '',
    ancho: '',
    profundidad: '',
    rendimiento: '',
    costo: '',
    cambio: ''
  };

  delete(id: string): void {
    this.llantaentradaService.deleteLlantaEntrada(id);
  }

  updateLlanta(
    id: string,
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

    llantaEntrada.id = id;
    llantaEntrada.marca = marca;
    llantaEntrada.modelo = modelo;
    llantaEntrada.tipo = tipo;
    llantaEntrada.tamano = tamano;
    llantaEntrada.ancho = ancho;
    llantaEntrada.profundidad = profundidad;
    llantaEntrada.rendimiento = rendimiento;
    llantaEntrada.costo = costo;
    llantaEntrada.cambio = cambio;

    this.update(llantaEntrada);
  }

  update(llantaentrada: Llantaentrada) {
    this.llantaentradaService.updateLlantaEntrada(llantaentrada);
  }

  select(id: number): void {
    this.llanta = this.llantas[id];
  }


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
