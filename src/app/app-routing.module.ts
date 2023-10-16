import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogged } from '@@auth';
import { isNotLogged } from '@@auth';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    canMatch: [isLogged],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'login',
    canMatch: [isNotLogged],
    loadChildren: () => import('@@login').then((m) => m.LoginModule),
  },
  {
    path: 'user-list',
    loadChildren: () => import("@@user-list-ng-select").then((m) => m.UserListModule),
  },
  {
    path: 'users',
    loadChildren: () => import("@@users").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
