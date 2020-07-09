import { QrService } from '../../../services/qr.service';
import { Component, OnInit } from '@angular/core';
import { Subscribable } from 'rxjs';
import { ChartOptions, ChartType } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
import { LlantasexistenciaService } from 'src/app/services/llantasexistencia.service';
import { Llantasexistencia } from 'src/app/llantasexistencia.model';

interface QR {
  dataUrl: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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


  constructor(private qrService: QrService, private llantasexistenciaservice: LlantasexistenciaService) { }
  dataURL: string;
// Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    labels: {
        // This more specific font property overrides the global property
        fontColor: 'white'
    }
}
};


public pieChartLabels: Label[] = ['En mantenimiento', 'Vulcanizdas', 'En uso', 'Almacén'];
public pieChartData: SingleDataSet = [50, 500, 100, 150];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
llantas: Llantasexistencia[];

  ngOnInit(): void {
    this.qrService.qr('http://youtube.com').subscribe(
      (qr: QR) => {
        this.dataURL = qr.dataUrl;
      }
    );

    this.llantasexistenciaservice.getLlantas().subscribe(data => {
      this.llantas = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Llantasexistencia }
      });
      this.pieChartData = this.pieChartData = [this.llantas[0].mantenimiento, this.llantas[0].vulcanizadas, this.llantas[0].enuso, this.llantas[0].almacen];
    });

    let l: Llantasexistencia = {
      id: null,
      mantenimiento: 4,
      almacen: 2, 
      vulcanizadas: 10,
      enuso: 8
    }

    //this.create(l);
  }

  create(llanta: Llantasexistencia) {
    this.llantasexistenciaservice.createLlantas(llanta);
  }

  update(llanta: Llantasexistencia) {
    this.llantasexistenciaservice.updateLlantas(llanta);
  }

  delete(llanta: Llantasexistencia) {
    this.llantasexistenciaservice.deleteLlantas(llanta.id);
  }

  data() {
    console.log('called!');
    return 'data';
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
