import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Agency } from 'src/app/core/api/agency.interface';
import { IdName } from 'src/app/core/api/id-name.interface';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

@Component({
  selector: 'app-new-agency-form',
  templateUrl: './new-agency.form.html',
  styleUrls: ['./new-agency.form.css'],
})
export class NewAgencyForm extends FormBase implements OnInit {
  @Input() public ranges: IdName[] = [];
  @Input() public statuses: string[] = [];
  @Output() public save = new EventEmitter<Agency>();

  constructor(
    formBuilder: FormBuilder,
    fms: FormMessagesService,
    private ts: TransformationsService
  ) {
    super(fms);

    this.form = formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      range: new FormControl('', [Validators.required]),
      status: new FormControl(this.statuses[0]),
    });
  }

  public onSubmitClick() {
    const { name, range, status } = this.form.value;
    const id = this.ts.getDashId(name);
    const newAgencyData = { id, name, range, status };
    console.warn('Send agency data ', newAgencyData);
    this.save.emit(newAgencyData);
  }

  ngOnInit(): void {}
}
