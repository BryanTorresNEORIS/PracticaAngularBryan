import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Debes utilizar styleUrls en lugar de styleUrl
})
export class LoginComponent {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder // Aquí se inyecta el FormBuilder correctamente
  ) { }
  
  public banderaLogin: boolean = false;
  public loginForm: FormGroup = this.formBuilder.group({ // Utiliza formBuilder en lugar de autenticador
    email: ['bryan.torres@neoris.com', 
      [Validators.required, Validators.email]],
    password: ['XCrypt07', 
      [ Validators.required, Validators.minLength(5), Validators.maxLength(10) ]]
  });
  
  authLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
      const user = usuarios.find((user: any) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem('loggedUser', JSON.stringify(user));
        this.router.navigate(['/dash']);
      } else {
        this.banderaLogin = true;
      }
    }
  }
}
