import { Component, OnInit } from '@angular/core';
import { Observable, Subject, switchMap } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies!: Agency[];
  public agencies$: Observable<Agency[]>;
  private search$: Subject<string> = new Subject();

  public error: boolean = false;

  constructor(private agenciesApi: AgenciesApi) {
    this.agencies$ = this.agenciesApi.getAll$();

    this.search$.subscribe(
      (searchTerm) => (this.agencies$ = this.agenciesApi.getByText$(searchTerm))
    );

    this.agencies$ = this.search$.pipe(
      // map((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      switchMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // concatMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
      // exhaustMap((searchTerm) => this.agenciesApi.getByText$(searchTerm))
    );
  }

  onReload() {
    this.agencies$ = this.agenciesApi.getAll$();

    // this.agenciesApi
    //   .getAll$()
    //   .subscribe((agencies) => (this.agencies = agencies));
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }

  ngOnInit(): void {}
}
