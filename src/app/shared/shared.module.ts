import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgenciesList } from './components/agencies/agencies.list';
import { ReloadingComponent } from './reloading/reloading.component';

@NgModule({
  declarations: [ReloadingComponent, AgenciesList],
  imports: [CommonModule],
  exports: [ReloadingComponent, AgenciesList],
})
export class SharedModule {}
