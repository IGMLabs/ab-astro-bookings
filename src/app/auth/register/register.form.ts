import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register.form.html',
  styleUrls: ['./register.form.css'],
})
export class RegisterForm extends FormBase implements OnInit {
  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService
  ) {
    super(fms);
    super.form = formBuilder.group(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
        ]),
        email: new FormControl(''),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
        acceptTerms: new FormControl(false, [Validators.requiredTrue]),
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
    const register = { name, email, password };
    console.warn('Send register', register);
  }
  ngOnInit(): void {}
}
