import { Component } from '@angular/core';
import { UsuarioServiceComponent } from '../../services/usuario-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrl: './registro-usuarios.component.css'
})
export class RegistroUsuariosComponent {

  usuarios: any = [];
  loggedUser = { nombre: '', genero: '', rol: '' , id: '' };


  constructor( private usuarioService: UsuarioServiceComponent, private router: Router ) { }

  ngOnInit(): void {
    this.cargaUsuarios();
    this.cargarLoggedUser();
  }

  cargaUsuarios(): void {
    this.usuarios = this.usuarioService.obtenerListaUsuarios();
  }

  cargarLoggedUser(): void {
    this.loggedUser = JSON.parse(localStorage.getItem('loggedUser') || '{}');
  }

  editarUsuario(user: any): void {
    this.router.navigate(['dash/usuarios/form', user.id]);
  }

  registrarUsuario(): void {
    this.router.navigate(['dash/usuarios/form']);
  }

  eliminarUsuario(userId: number): void {
    const aviso = confirm('¿Desea eliminar a este usuario?');
    if (aviso) {
      this.usuarioService.eliminarUsuario(userId);
      this.cargaUsuarios();
    }
  }

}
