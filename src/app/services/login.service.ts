import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogueado: boolean = true;

  constructor( private router: Router) { }

  setIsLogueado(value: boolean) {
    this.isLogueado = value;
  }

  getIsLogueado(): boolean {
    return this.isLogueado;
  }

  logOut(): void{
    this.setIsLogueado(false);
    this.router.navigate(['/layout']);
  }
}
