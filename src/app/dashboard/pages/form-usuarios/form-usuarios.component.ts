import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceComponent } from '../../services/usuario-service.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../../model/usuario/usuario';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css']
})
export class FormUsuariosComponent implements OnInit {
  usuarios: any = [];
  neoForm: FormGroup;
  banderaEdicion = false;
  usuarioId!: number;
  defaultImage = 'assets/images/icon.png';
  
  constructor(
    private builder: FormBuilder,
    private usuarioService: UsuarioServiceComponent, 
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.neoForm = this.builder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      genero: ['', Validators.required],
      rol: ['', Validators.required],
      fechaAlta: ['',{ value: this.formatFecha(new Date()), disabled: true }],
      imagen: [this.defaultImage]
    });
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

  ngOnInit(): void {
    this.cargaUsuarios();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.usuarioId = +params['id'];
        this.banderaEdicion = true;
        this.llenarForm();
      }else{
        this.llenarFormVacio();
      }
    });
  }

  llenarForm(): void {
    const user = this.usuarioService.obtenerListaUsuarios().find(u => u.id === this.usuarioId);
    if (user) {
      this.neoForm.patchValue(user);
      this.neoForm.get('fechaAlta')?.setValue(user.fechaAlta);
    }
  }

  llenarFormVacio(): void {
    this.neoForm.get('fechaAlta')?.setValue(this.formatFecha(new Date()));
  }

  cancelar(): void {
    this.router.navigate(['/dash/usuarios']);
  }

  cambioImagen(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.neoForm.patchValue({ imagen: reader.result as string });
      };
      reader.readAsDataURL(file);
    } else {
      this.neoForm.patchValue({ imagen: this.defaultImage });
    }
  }

  eliminarImagen(): void {
    this.neoForm.patchValue({ imagen: this.defaultImage });
  }

  onSubmit(): void {
    if (this.neoForm.invalid) {
      return;
    }

    const formValue = { ...this.neoForm.value, fechaAlta: this.neoForm.get('fechaAlta')?.value };

    if (this.banderaEdicion) {
      formValue.id = this.usuarioId;
      this.usuarioService.actualizarUsuario(formValue);
      localStorage.setItem('loggedUser', JSON.stringify(formValue));
    } else {
      formValue.id = Date.now();
      this.usuarioService.nuevoUsuario(formValue);
    }

    this.router.navigate(['/dash/usuarios']);
  }

  cargaUsuarios(): void {
    this.usuarios = this.usuarioService.obtenerListaUsuarios();
  }
}
