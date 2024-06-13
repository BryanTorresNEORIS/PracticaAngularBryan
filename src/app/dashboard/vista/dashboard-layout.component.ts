import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  
  constructor( private router: Router ) { }

  loggedUser = { rol: '' };
  
  ngOnInit(): void {
    this.cargarLogged();
  }

  cargarLogged(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
  }

  logout(): void {
    localStorage.removeItem('loggedUser');
    this.router.navigate(['/login']);
  }
}
