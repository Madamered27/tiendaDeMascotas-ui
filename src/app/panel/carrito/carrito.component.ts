import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  productoCarrito: ProductoCarrito;
  listProductos: Array<any> = []
  precioTotal: number = 0;
  cantidad:number = 1;
  id: number = 0;
  isMensajeMostrado: boolean = false;

  constructor(private aRoute: ActivatedRoute, private productoService: ProductoService, private carritoService: CarritoService){
    this.cantidad = +this.aRoute.snapshot.paramMap.get("cantidad")!;
    this.productoCarrito = new ProductoCarrito(this.cantidad);
  }

  ngOnInit(): void {
    this.getProductosCarrito();
    this.calcularPrecioTotal();
  }

  getProductosCarrito(){
    let listaProductosTemp = this.carritoService.obtenerProductos();
    for(let producto of listaProductosTemp){
      this.productoCarrito.nombre = producto.nombre;
      this.productoCarrito.id = producto.id;
      this.productoCarrito.precio = producto.precio;
      this.productoCarrito.stock = producto.stock;
      this.productoCarrito.categoria = producto.categoria;
      this.carritoService.agregarProductoAlCarrito(this.productoCarrito);
    }
    this.listProductos = this.carritoService.obtenerProductosCarrito();
    this.carritoService.vaciarListaProductos();
  }

  vaciar(){
    this.carritoService.vaciarCarrito();
  }

  calcularPrecioTotal(){
    this.precioTotal = this.carritoService.calcularPrecioFinal()
  }

  comprar(){
    this.productoCarrito.stock -= this.productoCarrito.cantidad
    let producto: any ={
      "id": this.productoCarrito.id,
      "nombre": this.productoCarrito.nombre,
      "precio": this.productoCarrito.precio,
      "stock": this.productoCarrito.stock,
      "categoria": this.productoCarrito.categoria
    }
    this.productoService.modificarProducto(this.productoCarrito.id, producto).subscribe( resp => {
    });

    this.vaciar();
    this.isMensajeMostrado = true;
  }

  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }

}

export class ProductoCarrito{

  private _id: number = 0;
  private _cantidad:number = 1;
  private _nombre: string = "";
  private _precio: number = 0;
  private _stock: number = 0;
  private _categoria: string = "";

  constructor(cantidad: number){
    this._cantidad = cantidad;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get cantidad(): number {
    return this._cantidad;
  }

  set cantidad(value: number) {
    this._cantidad = value;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get stock(): number {
    return this._stock;
  }

  set stock(value: number) {
    this._stock = value;
  }

  get categoria(): string {
    return this._categoria;
  }

  set categoria(value: string) {
    this._categoria = value;
  }


}
