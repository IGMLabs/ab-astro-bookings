import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  // public agencies!: Agency[];
  public agencies$: Observable<Agency[]>;
  private search$: Subject<string> = new Subject();

  public error: boolean = false;

  constructor(private agenciesApi: AgenciesApi) {
    this.agencies$ = this.agenciesApi.getAll$();
    this.search$.subscribe(
      (searchTerm) => (this.agencies$ = this.agenciesApi.getByText$(searchTerm))
    );
  }

  onReload() {
    this.agencies$ = this.agenciesApi.getAll$();
  }

  onSearch(searchTerm: string) {
    this.search$.next(searchTerm);
    // this.agencies$ = this.agenciesApi.getByText$(searchTerm);
  }

  ngOnInit(): void {}
}
