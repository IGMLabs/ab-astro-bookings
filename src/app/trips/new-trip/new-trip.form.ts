import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { TripsApi } from 'src/app/core/api/trips.api';
import { FormMessagesService } from 'src/app/core/forms/form-messages.service';
import { FormValidationsService } from 'src/app/core/forms/form-validations.service';
import { FormBase } from 'src/app/core/forms/form.base';
import { TransformationsService } from 'src/app/core/utils/transformations.service';

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
export class NewTripForm extends FormBase implements OnInit {
  public agencies: Agency[];

  constructor(
    formBuilder: FormBuilder,
    fvs: FormValidationsService,
    fms: FormMessagesService,
    private ts: TransformationsService,
    agenciesApi: AgenciesApi,
    private tripsApi: TripsApi
  ) {
    super(fms);
    this.agencies = agenciesApi.getAll();
    this.form = formBuilder.group(
      {
        agencyId: new FormControl('', [Validators.required]),
        destination: new FormControl('', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        places: new FormControl(1, [
          Validators.required,
          Validators.min(1),
          Validators.max(10),
        ]),
        startDate: new FormControl(),
        endDate: new FormControl('03/08/2002'),
      },
      {
        validators: [fvs.datesRange],
      }
    );
  }

  public onSubmitClick() {
    const { agencyId, destination } = this.form.value;
    const id = this.ts.getDashId(agencyId + ' ' + destination);
    const newTripData = { id, agencyId, destination, status: 'Waiting' };
    console.warn('Send trip data ', newTripData);
    this.tripsApi.post(newTripData);
  }

  public getDatesRangeMessage() {
    const errors = this.form.errors;
    if (!errors) return '';
    if (errors['datesRange']) return errors['datesRange'];
    return '';
  }

  ngOnInit(): void {}
}
