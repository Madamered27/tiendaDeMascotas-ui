import { Injectable } from '@angular/core';
import { ProductoCarrito } from '../panel/carrito/carrito.component';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  listProductos: Array<any> = [];
  listProductosCarrito: Array<ProductoCarrito> = [];

  constructor() {}

  agregarProducto(producto: any) {
    this.listProductos.push(producto);
  }

  agregarProductoAlCarrito(producto: any) {
    this.listProductosCarrito.push(producto);
  }

  obtenerProductos() {
    return this.listProductos;
  }

  obtenerProductosCarrito() {
    return this.listProductosCarrito;
  }

  vaciarListaProductos(): void {
    this.listProductos.splice(0, this.listProductos.length);
  }

  vaciarCarrito(): void {
    this.listProductosCarrito.splice(0, this.listProductosCarrito.length);
  }

  calcularPrecioFinal() {
    let total = 0;
    this.listProductosCarrito.forEach((producto) => {
      total += producto.precio * producto.cantidad;
    });

    return total;
  }

}
