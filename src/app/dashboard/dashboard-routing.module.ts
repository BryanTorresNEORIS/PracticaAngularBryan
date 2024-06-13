import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './vista/dashboard-layout.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { RegistroUsuariosComponent } from './pages/registro-usuarios/registro-usuarios.component';
import { FormUsuariosComponent } from './pages/form-usuarios/form-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'usuarios', component: RegistroUsuariosComponent },
      { path: 'usuarios/form', component: FormUsuariosComponent },
      { path: 'usuarios/form/:id', component: FormUsuariosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
