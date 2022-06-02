import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgenciesRoutingModule } from './agencies-routing.module';
import { AgenciesPage } from './agencies.page';

@NgModule({
  declarations: [AgenciesPage],
  imports: [CommonModule, AgenciesRoutingModule, SharedModule],
})
export class AgenciesModule {}
