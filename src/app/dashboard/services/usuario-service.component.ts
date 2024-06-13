import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceComponent {

    obtenerListaUsuarios(): any[] {
      return JSON.parse(localStorage.getItem("usuarios") || '[]');
    }
  
    nuevoUsuario(user: any): void {
      const users = this.obtenerListaUsuarios();
      users.push(user);
      localStorage.setItem("usuarios", JSON.stringify(users));
    }
  
    actualizarUsuario(user: any): void {
      const users = this.obtenerListaUsuarios();
      const index = users.findIndex((u: any) => u.id === user.id);
      if (index !== -1) {
        users[index] = user;
        localStorage.setItem("usuarios", JSON.stringify(users));
      }
    }
  
    eliminarUsuario(userId: number): void {
      const users = this.obtenerListaUsuarios();
      const filteredUsers = users.filter((user: any) => user.id !== userId);
      localStorage.setItem("usuarios", JSON.stringify(filteredUsers));
    }
}
