import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgenciesApi } from 'src/app/core/api/agencies.api';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css'],
})
export class AgencyPage implements OnInit {
  public agencyId: string;
  public agency?: Agency;

  constructor(route: ActivatedRoute, agenciesApi: AgenciesApi) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
    agenciesApi.getById(this.agencyId).subscribe((data) => {
      this.agency = data;
    });
  }

  ngOnInit(): void {}
}
