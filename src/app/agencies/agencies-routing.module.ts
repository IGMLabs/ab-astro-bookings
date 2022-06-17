import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from '../auth/api/authenticated.guard';
import { AgenciesPage } from './agencies.page';

const routes: Routes = [
  { path: '', component: AgenciesPage },
  {
    path: 'agency/new',
    canLoad: [AuthenticatedGuard],
    loadChildren: () =>
      import('./new-agency/new-agency.module').then((m) => m.NewAgencyModule),
  },
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
