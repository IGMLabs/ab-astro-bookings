import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsPage } from './trips.page';

const routes: Routes = [{ path: '', component: TripsPage }, { path: 'trip/:id', loadChildren: () => import('./trip/trip.module').then(m => m.TripModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripsRoutingModule {}
