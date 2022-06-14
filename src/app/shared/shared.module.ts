import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { TripsList } from './components/trips/trips.list';
import { EmailControl } from './controls/email/email.control';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList, TripsList, EmailControl],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesList,
    TripsList,
    EmailControl,
  ],
})
export class SharedModule {}
