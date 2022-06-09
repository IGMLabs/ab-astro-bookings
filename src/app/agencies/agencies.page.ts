import { Component, OnInit } from '@angular/core';
import { AgenciesApi } from '../core/api/agencies.api';
import { Agency } from '../core/api/agency.interface';

@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.page.html',
  styleUrls: ['./agencies.page.css'],
})
export class AgenciesPage implements OnInit {
  public agencies!: Agency[];

  constructor(private agenciesApi: AgenciesApi) {
    this.agenciesApi.getAll().subscribe((data) => {
      this.agencies = data;
    });
  }

  onReload() {
    this.agenciesApi.getAll().subscribe((data) => {
      this.agencies = data;
    });
  }

  ngOnInit(): void {}
}
