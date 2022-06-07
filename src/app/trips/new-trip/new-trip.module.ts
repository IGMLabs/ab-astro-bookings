import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewTripRoutingModule } from './new-trip-routing.module';
import { NewTripForm } from './new-trip.form';
import { NewTripPage } from './new-trip.page';

@NgModule({
  declarations: [NewTripPage, NewTripForm],
  imports: [CommonModule, NewTripRoutingModule, SharedModule],
})
export class NewTripModule {}
