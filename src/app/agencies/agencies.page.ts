import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';
import { Trip } from '../core/api/trip.interface';
import { TripsApi } from '../core/api/trips.api';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies$: Observable<Agency[]>;
  public trips$!: Observable<Trip[]>;
  private search$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(
    private agenciesApi: AgenciesApi,
    private tripsApi: TripsApi,
    private route: ActivatedRoute
  ) {
    this.agencies$ = this.search$.pipe(
      // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
    );
    this.trips$ = this.route.queryParamMap.pipe(
      map((queryParamMap) => queryParamMap.get('q')),
      switchMap((agencyId) => this.tripsApi.getByText$(agencyId))
    );
  }

  onReload() {
    this.search$.next('');
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
  }

  ngOnInit(): void {}
}
