import { Component } from '@angular/core';
import { Usuario } from './model/usuario/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontAngularLogin';
  ngOnInit() {
    this.iniciarUsuariosPrueba();
  }

  formatFecha = (fecha: Date): string => {
    const opciones: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    };
    return fecha.toLocaleDateString('es-ES', opciones);
  };
  iniciarUsuariosPrueba(){
    const usuarios: Usuario[]=[
      {
        id: 1,
        nombre: 'Bryan Torres',
        email: 'bryan.torres@neoris.com',
        password: 'XCrypt07',
        rol: 'Administrador',
        genero:'Masculino',
        fechaAlta: this.formatFecha(new Date()),
        imagen: 'assets/images/user2.png'
      },
      {
        id: 2,
        nombre: 'Erika Yeraldi',
        email: 'yerr08@gmail.com',
        password: 'HolaPrueba',
        rol: 'Administrador',
        genero:'Femenino',
        fechaAlta: this.formatFecha(new Date()),
        imagen: ''
      },
      {
        id: 3,
        nombre: 'Señor Neoris',
        email: 'neo@neo.com',
        password: 'NEORIS',
        rol: 'Recepcionista',
        genero:'Masculino',
        fechaAlta: this.formatFecha(new Date()),
        imagen: 'assets/images/neoris.png'
      },
    ];
    if (!localStorage.getItem('usuarios')) {
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
  }
}
