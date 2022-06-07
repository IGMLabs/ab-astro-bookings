import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTripPage } from './new-trip.page';

const routes: Routes = [{ path: '', component: NewTripPage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTripRoutingModule {}
