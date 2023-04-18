import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  listProductos: Array<any> = []
  isCargando: boolean = true;

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void{
    this.productoService.getProductos().subscribe(productos =>{
      this.listProductos = productos
      this.isCargando = false;
    })
  }

  eliminarCard(id: number){
    this.listProductos = this.listProductos.filter(producto => producto.id !== id);
  }

  filtrarPorCategoria(listProductosFiltrados : Array <any>){
    listProductosFiltrados.length == 0? this.getProductos() : this.listProductos = listProductosFiltrados;
  }

}
