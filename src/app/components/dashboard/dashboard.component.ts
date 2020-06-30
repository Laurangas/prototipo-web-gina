import { FontSizeService } from './../../services/font-size/font-size.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, public fontSizeService: FontSizeService) { }

  ngOnInit(): void {

  }

}
