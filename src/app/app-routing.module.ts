import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { autenticacionRuta } from './auth/guard/guard.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( mod => mod.AuthModule )
  },
  {
    path: 'dash',
    canActivate: [ autenticacionRuta ],
    loadChildren: () => import('./dashboard/dashboard.module').then( mod => mod.DashModule  )
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
