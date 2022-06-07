import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/**
 *
 * {
      id: 'space-y-moon-1',
      agencyId: 'space-y',
      destination: 'The Moon', <2,20>
      places: 14, <1,10>
      startDate: '2023-01-01',
      endDate: '2023-02-01',
      flightPrice: 1200000 <1000000, 10000000>,
      }
 *
 */

@Component({
  selector: 'app-new-trip-form',
  templateUrl: './new-trip.form.html',
  styleUrls: ['./new-trip.form.css'],
})
export class NewTripForm implements OnInit {
  public form: FormGroup;

  public agencies = [
    {
      id: 'space-y',
      name: 'Space Y',
      range: 'Interplanetary',
      status: 'Active',
    },
    {
      id: 'green-origin',
      name: 'Green Origin',
      range: 'Orbital',
      status: 'Active',
    },
    {
      id: 'virgin-way',
      name: 'Virgin Way',
      range: 'Orbital',
      status: 'Pending',
    },
  ];

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      agencyId: new FormControl('', [Validators.required]),
      destination: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }

  public hasError(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.invalid;
  }

  public mustShowMessage(controlName: string): boolean {
    const control = this.getControl(controlName);
    if (!control) return false;
    return control.touched && control.invalid;
  }

  public getErrorMessage(controlName: string): string {
    const control = this.getControl(controlName);
    if (!control) return '';
    if (!control.errors) return '';
    const errors = control.errors;
    let errorMessage = '';
    errorMessage += errors['required'] ? '🔥 Field is required ' : ' ';
    errorMessage += errors['minlength']
      ? `🔥 More than ${errors['minlength'].requiredLength} chars`
      : ' ';
    errorMessage += errors['maxlength']
      ? `🔥 Less than ${errors['maxlength'].requiredLength} chars`
      : '';
    return errorMessage;
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  public onSubmitClick() {
    // const { name, range, status } = this.form.value;
    // const id = this.getDashId(name);
    // const newAgencyData = { id, name, range, status };
    // console.warn('Send agency data ', newAgencyData);
  }

  ngOnInit(): void {}
}
