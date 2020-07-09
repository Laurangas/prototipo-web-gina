import { QrService } from '../../../services/qr.service';
import { Component, OnInit } from '@angular/core';
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
  displayedColumns: string[] = ['mantenimiento', 'vulcanizadas', 'enuso', 'almacen'];

  Text = '';
  rep: any;
  pausado = false;
  init = true;

  constructor(private qrService: QrService, 
  private llantasexistenciaservice: LlantasexistenciaService) { }
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


    this.llantasexistenciaservice.getLlantas().subscribe(data => {
      this.llantas = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Llantasexistencia }
      });
      this.pieChartData = [this.llantas[0].mantenimiento, this.llantas[0].vulcanizadas, this.llantas[0].enuso, this.llantas[0].almacen];
      this.qrService.qr(this.pieChartData.toString()).subscribe(
        (qr: QR) => {
          this.dataURL = qr.dataUrl;
        }
      );
    });
  }

  delete(llanta: Llantasexistencia) {
    this.llantasexistenciaservice.deleteLlantas(llanta.id);
  }

}
