import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  }

  private baseUrl: string = "http://localhost:8080/producto";

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getProducto(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  getConsultarStock(): Observable<any>{
    return this.http.get(`${this.baseUrl}/faltanteStock`);
  }

  eliminarProducto(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  agregarProducto(producto: any): Observable<any>{
    return this.http.post(this.baseUrl, producto);
  }

  modificarProducto(id: number, producto: any): Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`, producto);
  }

  buscarPorCategoria(categoria: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/query?categoria=${categoria}`);
  }

}
