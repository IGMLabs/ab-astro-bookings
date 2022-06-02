import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './agency.page.html',
  styleUrls: ['./agency.page.css'],
})
export class AgencyPage implements OnInit {
  public agencyId: string;

  constructor(route: ActivatedRoute) {
    this.agencyId = route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {}
}
