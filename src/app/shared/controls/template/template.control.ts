import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';

@Component({
  selector: 'app-template-control',
  templateUrl: './template.control.html',
  styleUrls: ['./template.control.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateControl),
      multi: true,
    },
  ],
})
export class TemplateControl implements OnInit, ControlValueAccessor {
  @Input() public form!: FormGroup;
  @Input() public formControlName: string = '';
  @Input() public inputType: string = 'text';
  @Input() public label: string = 'Enter data';
  @Input() public placeholder: string = '...';

  public touchedCallBack: any;
  public changeCallBack: any;
  public value: any;

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

  public onKeyUp(event: any) {
    const controlValue = event.target.value;
    this.value = controlValue;
    this.changeCallBack(this.value);
    this.touchedCallBack();
  }

  public writeValue(value: any): void {
    this.value = value;
  }
  public registerOnChange(changeCallBack: any): void {
    this.changeCallBack = changeCallBack;
  }
  public registerOnTouched(touchedCallback: any): void {
    this.touchedCallBack = touchedCallback;
  }

  public ngOnInit(): void {}
}
