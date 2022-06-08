import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agencies-list',
  templateUrl: './agencies.list.html',
  styleUrls: ['./agencies.list.css'],
})
export class AgenciesList implements OnInit {
  public agencies: Agency[];

  public reloading = false;

  constructor(agenciesApi: AgenciesApi) {
    this.agencies = agenciesApi.getAll();
  }

  public reload(list: string) {
    this.reloading = true;
    console.log('Reloading...' + list);
  }

  public getAgenciesLength() {
    return this.agencies.length;
  }

  ngOnInit(): void {}
}
