import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm implements OnInit {
  public form: FormGroup;
  public ranges = [
    { id: 'Orbital', name: '🌎 Orbiting around the earth' },
    {
      id: 'Interplanetary',
      name: '🌕 To the moon and other planets',
    },
    { id: 'Interstellar', name: '💫 Traveling to other stars' },
  ];
  public statuses = ['Active', 'Pending'];

  constructor(formBuilder: FormBuilder, private ts: TransformationsService) {
    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
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

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.ts.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
  }

  private getControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }
  ngOnInit(): void {}
}
