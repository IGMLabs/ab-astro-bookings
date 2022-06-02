import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReloadingComponent } from './components/reloading/reloading.component';
import { TripsList } from './components/trips/trips.list';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList, TripsList],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    RouterModule,
    ReactiveFormsModule,
    ReloadingComponent,
    AgenciesList,
    TripsList,
  ],
})
export class SharedModule {}
