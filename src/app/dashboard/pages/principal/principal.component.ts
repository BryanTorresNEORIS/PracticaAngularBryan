import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  loggedUser = { nombre: '', genero: '', rol: '' };
  totalUsuarios = 0;
  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    const neos = JSON.parse(localStorage.getItem('usuarios') || '[]');
    this.totalUsuarios = neos.length;
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
  }
}
