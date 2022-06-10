import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements OnInit {
  public agencies$: Observable<Agency[]>;

  constructor(private agenciesApi: AgenciesApi) {
    this.agencies$ = this.agenciesApi.getAll$();
  }

  public onReload() {
    this.agencies$ = this.agenciesApi.getAll$();
  }
  ngOnInit(): void {}
}
