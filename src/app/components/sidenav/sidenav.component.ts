import { FontSizeService } from './../../services/font-size/font-size.service';
import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ReaderService } from 'src/app/services/reader/reader.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private router: Router,
              public fontSizeService: FontSizeService,
              public authService: AuthService,
              public readerService: ReaderService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Home', route: 'home', icon: 'mdi-home'},
    {name: 'Contacto', route: 'contact', icon: 'mdi-contacts'},
    {name: 'Acerca de', route: 'about', icon: 'mdi-baby-face'},
    {name: 'Preguntas frecuentes', route: 'faq', icon: 'mdi-frequently-asked-questions'},
  ];

  fillerNavAdmin = [
    {name: 'Panel de control', route: 'dashboard', icon: 'mdi-speedometer'},
    {name: 'Registrar llantas al almacén', route: 'app/registro-llanta', icon: 'mdi-plus-circle'},
    {name: 'Actualizar datos llanta almacén', route: 'app/modificar-llanta', icon: 'mdi-circle-edit-outline'},
    {name: 'Detalle de llantas en el almacén', route: 'app/reporte-llanta', icon: 'mdi-circle-edit-outline'},
    {name: 'Registrar nuevas unidades', route: 'app/unidad/alta-unidad', icon: 'mdi-plus-circle'},  
    {name: 'Detalle de unidades', route: 'app/unidad/detalle-unidad', icon: 'mdi-plus-circle'},  
    {name: 'Perfil', route: 'perfil', icon: 'mdi-circle-edit-outline'}
  ];

  fillerNavUser = [
    {name: 'Detalle de llantas en el almacén', route: 'app/reporte-llanta', icon: 'mdi-circle-edit-outline'},
    {name: 'Detalle de unidades', route: 'app/unidad/detalle-unidad', icon: 'mdi-plus-circle'},  
    {name: 'Perfil', route: 'perfil', icon: 'mdi-circle-edit-outline'}
  ];

  shouldRun = true;

  ngOnInit(): void {

  }

}
