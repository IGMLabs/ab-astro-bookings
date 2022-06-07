import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidationsService {
  constructor() {}

  public passwordMatch(form: AbstractControl): ValidationErrors | null {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (!password || !confirmPassword) {
      return {
        passwordMatch: 'No passwords provided',
      };
    }
    if (password.value !== confirmPassword.value) {
      return {
        passwordMatch: 'Passwords don´t match!',
      };
    }
    return null;
  }

  public datesRange(form: AbstractControl): ValidationErrors | null {
    const startDate = form.get('startDate');
    const endDate = form.get('endDate');
    if (!startDate || !endDate) {
      return {
        datesRange: 'No dates provided',
      };
    }
    if (startDate.value > endDate.value) {
      return {
        datesRange: 'Dates are not in a range',
      };
    }
    return null;
  }
}
