import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardLayoutComponent } from './vista/dashboard-layout.component';
import { RegistroUsuariosComponent } from './pages/registro-usuarios/registro-usuarios.component';
import { FormUsuariosComponent } from './pages/form-usuarios/form-usuarios.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    RegistroUsuariosComponent,
    FormUsuariosComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashModule { }
