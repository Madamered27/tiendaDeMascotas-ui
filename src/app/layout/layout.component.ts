import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  usuario: any = '';
  id: number = 0;
  isMensajeMostrado: boolean = false;

  loginForm: FormGroup = this.fb.group({
    mail: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private loginService: LoginService
  ) {}

  irPanel(): void {
    this.router.navigate(['/panel']);
  }

  login() {
    this.usuarioService
      .buscarUsuario(this.loginForm.value.mail, this.loginForm.value.password)
      .subscribe((resp) => {
        this.usuario = resp;

        if (this.usuario !== null) {
          this.loginService.setIsLogueado(true);
          this.irPanel();
        } else {
          this.isMensajeMostrado = true;
        }
      });
  }

  logOut(): void {
   this.loginService.logOut();
  }

  comprobarAutorizacion(){
    return this.loginService.getIsLogueado();
  }

  eliminarMensaje() {
    this.isMensajeMostrado = false;
  }
}
