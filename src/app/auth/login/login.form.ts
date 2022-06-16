import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';
import { Login } from '../api/login.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login.form.html',
  styleUrls: ['./login.form.css'],
})
export class LoginForm extends FormBase implements OnInit {
  @Output() login = new EventEmitter<Login>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService
  ) {
    super(fms);
    super.form = formBuilder.group({
      email: new FormControl('albertobasalo@hotmail.com'),
      password: new FormControl('1234', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    });
  }

  public onSave() {
    const { email, password } = this.form.value;
    const login: Login = { email: email.email, password };
    console.warn('Send login', login);
    this.login.emit(login);
  }
  ngOnInit(): void {}
}
