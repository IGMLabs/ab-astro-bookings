import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';
import { Trip } from 'src/app/core/api/trip.interface';
import { TripsApi } from 'src/app/core/api/trips.api';

@Component({
  templateUrl: './new-trip.page.html',
  styleUrls: ['./new-trip.page.css'],
})
export class NewTripPage implements OnInit {
  public agencies$: Observable<Agency[]>;

  constructor(agenciesApi: AgenciesApi, private tripsApi: TripsApi) {
    this.agencies$ = agenciesApi.getAll$();
  }

  public onSave(newTrip: Partial<Trip>) {
    this.tripsApi.post(newTrip);
  }

  ngOnInit(): void {}
}
