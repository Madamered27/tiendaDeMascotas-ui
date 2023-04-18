import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {

  producto: any = "";
  img: string = "";
  nombre: string = '';
  precio: number = 0;
  categoria: string = '';
  stock: number = 0;
  id: number = 0;
  isCargando: boolean = true;
  isMensajeMostrado: boolean = false;
  isMensajeCantidadCero: boolean = false;

  constructor(
    private aRoute: ActivatedRoute,
    private productoService: ProductoService,
    private router: Router,
    private carritoService: CarritoService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getProducto();
  }

  getProducto() {
    this.productoService.getProducto(this.id).subscribe((producto) => {
      this.nombre = producto.nombre;
      this.categoria = producto.categoria;
      this.stock = producto.stock;
      this.id = producto.id;
      this.isCargando = false;
      this.precio = producto.precio;
      this.img = producto.img;
      this.producto = producto;
    });
  }

  agregarAlCarrito(cantidad: string) {
    if(this.stock >= parseInt(cantidad) && parseInt(cantidad)> 0){
      this.carritoService.agregarProducto(this.producto);
      this.router.navigate(['carrito', parseInt(cantidad)]);
    }else if(parseInt(cantidad) <= 0){
      this.isMensajeCantidadCero = true;
    }else{
      this.isMensajeMostrado = true;
    }
  }


  eliminarMensaje(){
    this.isMensajeMostrado = false;
    this.isMensajeCantidadCero = false;
  }


}
