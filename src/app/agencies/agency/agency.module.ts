import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyPage } from './agency.page';

@NgModule({
  declarations: [AgencyPage],
  imports: [CommonModule, AgencyRoutingModule],
})
export class AgencyModule {}
