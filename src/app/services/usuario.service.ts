import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = "http://localhost:8080/usuario";

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable <any>{
    return this.http.get(this.baseUrl);
  }

  agregarUsuario(usuario: any){
    return this.http.post(this.baseUrl, usuario);
  }

  eliminarUsuario(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  buscarUsuario(mail: string, contra: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/buscarUsuario?email=${mail}&password=${contra}`);
  }



}
