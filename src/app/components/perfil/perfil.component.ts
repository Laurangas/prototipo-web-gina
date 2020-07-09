import { FontSizeService } from '../../services/font-size/font-size.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public authService: AuthService, public fontSizeService: FontSizeService) { }

  ngOnInit(): void {

  }

}
