import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudApi } from './crud.api';
import { StatusStore } from './status.store';
import { Trip } from './trip.interface';

@Injectable({
  providedIn: 'root',
})
export class TripsApi extends CrudApi<Trip> {
  constructor(http: HttpClient, statusStore: StatusStore) {
    super(http, 'trips', statusStore);
  }
}
