import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  myForm: FormGroup;
  emailForm: FormGroup;
  hideA = true;
  hideB = true;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: [''],
    }, { validator: this.checkPasswords });

    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]]
    }, {});

  }

  matcher = new MyErrorStateMatcher();

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  ngOnInit(): void {
  }

}
