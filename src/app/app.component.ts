import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  loading='mdi-loading mdi-spin';
  
  ngOnInit(): void {
    this.myFunction();
  }
  
  myFunction() {
    setTimeout(function() {
      document.getElementById("mda").remove();
    }, 3000);
}
}
