import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  public agencies$: Observable<Agency[]>;
  public trips$: Observable<Trip[]>;

  constructor(private agenciesApi: AgenciesApi, private tripsApi: TripsApi) {
    this.agencies$ = this.agenciesApi.getAll$();
    this.trips$ = this.tripsApi.getAll$();
  }

  public onReload() {
    this.agencies$ = this.agenciesApi.getAll$();
    this.trips$ = this.tripsApi.getAll$();
  }
  ngOnInit(): void {}
}
