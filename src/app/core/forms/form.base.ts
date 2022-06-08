import { AbstractControl, FormGroup } from '@angular/forms';
import { FormMessagesService } from './form-messages.service';

export class FormBase {
  public form!: FormGroup;

  constructor(private fms: FormMessagesService) {}

  public hasError(controlName: string): boolean {
    return this.fms.hasError(this.form, controlName);
  }

  public mustShowMessage(controlName: string): boolean {
    return this.fms.mustShowMessage(this.form, controlName);
  }

  public getErrorMessage(controlName: string): string {
    return this.fms.getErrorMessage(this.form, controlName);
  }

  protected getControl(controlName: string): AbstractControl | null {
    return this.fms.getControl(this.form, controlName);
  }
}
