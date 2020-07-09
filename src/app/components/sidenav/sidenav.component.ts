import { FontSizeService } from './../../services/font-size/font-size.service';
import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
              public authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Home', route: 'home', icon: 'mdi-home'},
    {name: 'Contacto', route: 'contact', icon: 'mdi-contacts'},
    {name: 'Acerca de', route: 'about', icon: 'mdi-baby-face'},
    {name: 'Preguntas frecuentes', route: 'question', icon: 'mdi-frequently-asked-questions'},
    {name: 'FAQ', route: 'faq', icon: 'mdi-frequently-asked-questions'}
  ];

  fillerNavAdmin = [
    {name: 'Home', route: 'home', icon: 'mdi-home'},
    {name: 'Pie', route: 'pie', icon: 'mdi-home'},
    {name: 'Alta de llantas', route: 'app/registro-llanta', icon: 'mdi-plus-circle'},
    {name: 'Modificar llantas', route: 'app/modificar-llanta', icon: 'mdi-circle-edit-outline'},
    {name: 'Reporte de llantas', route: 'app/reporte-llanta', icon: 'mdi-circle-edit-outline'},
    {name: 'Dashboard', route: 'dashboard', icon: 'mdi-circle-edit-outline'}
  ];

  shouldRun = true;

  grilla(){
    this.router.navigate(['/grilla']);
  }

  ngOnInit(): void {

  }

}
