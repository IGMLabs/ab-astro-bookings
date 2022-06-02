import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesPage } from './agencies.page';

const routes: Routes = [
  { path: '', component: AgenciesPage },
  {
    path: 'agency/:id',
    loadChildren: () =>
      import('./agency/agency.module').then((m) => m.AgencyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
