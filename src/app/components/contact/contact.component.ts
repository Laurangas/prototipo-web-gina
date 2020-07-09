import { Component, OnInit } from '@angular/core';
import { MailerService } from './../../services/mailer/mailer.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public mailerService: MailerService) {}

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    
  }

}
