import { Component, Input, OnInit } from '@angular/core';
import { Agency } from 'src/app/core/api/agency.interface';

@Component({
  selector: 'app-agency-view',
  templateUrl: './agency.view.html',
  styleUrls: ['./agency.view.css'],
})
export class AgencyView implements OnInit {
  @Input() public agencyId!: string;
  @Input() public agency?: Agency;
  constructor() {}

  ngOnInit(): void {}
}
