import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormMessagesService } from '../core/forms/form-messages.service';
import { FormValidationsService } from '../core/forms/form-validations.service';
import { FormBase } from '../core/forms/form.base';
import { TransformationsService } from '../core/utils/transformations.service';

interface Contact {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact.form.html',
  styleUrls: ['./contact.form.css'],
})
export class ContactForm extends FormBase implements OnInit {
  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService
  ) {
    super(fms);
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl(''),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
    });
  }

  public onSave() {
    const contact = this.form.value;
    console.warn('Send contact message', contact);
  }
  ngOnInit(): void {}
}
