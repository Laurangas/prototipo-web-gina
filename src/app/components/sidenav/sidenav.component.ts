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
              public  authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }
  mobileQuery: MediaQueryList;

  fillerNav = [
    {name: 'Home', route: 'home', icon: 'mdi-home'},
    {name: 'Contacto', route: 'contact', icon: 'mdi-contacts'},
    {name: 'Acerca de', route: 'about', icon: 'mdi-baby-face'},
    {name: 'Preguntas frecuentes', route: 'question', icon: 'mdi-frequently-asked-questions'},
  ];

  fillerContent = Array(50).fill(0).map(() =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);


  shouldRun = true;

  grilla(){
    this.router.navigate(['/grilla']);
  }


  ngOnInit(): void {
  }

}
