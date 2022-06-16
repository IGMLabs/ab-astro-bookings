import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';
import { Register } from '../api/register.interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css'],
})
export class RegisterForm extends FormBase implements OnInit {
  @Output() register = new EventEmitter<Register>();

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService
  ) {
    super(fms);
    super.form = formBuilder.group(
      {
        name: new FormControl('Alberto Basalo', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl('albertobasalo@hotmail.com'),
        password: new FormControl('1234', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
        confirmPassword: new FormControl('1234', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
        acceptTerms: new FormControl(true, [Validators.requiredTrue]),
      },
      {
        validators: [fvs.passwordMatch],
      }
    );
  }

  public getPasswordMatchMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['passwordMatch']) return errors['passwordMatch'];
    return '';
  }

  public onSave() {
    const { name, email, password } = this.form.value;
    const register: Register = { name, email: email.email, password };
    console.warn('Send register', register);
    this.register.emit(register);
  }
  ngOnInit(): void {}
}
