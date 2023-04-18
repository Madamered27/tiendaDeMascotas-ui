import { Component, Output, EventEmitter } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  listCategorias: Array<any> = ['', 'juguetes_perros', 'juguetes_gato'];
  listProductosFiltrados: Array<any> = [];
  @Output()
  onBuscarPorCategoria: EventEmitter<Array<any>> = new EventEmitter();
  selectedCategoria: string = '';

  constructor(private productoService: ProductoService) {}

  buscarPorCategoria(categoria: string) {
    categoria = categoria.toLowerCase();
    this.productoService
      .buscarPorCategoria(categoria)
      .subscribe((productos) => {
        this.listProductosFiltrados = productos;
        this.onBuscarPorCategoria.emit(this.listProductosFiltrados);
      });
  }

  buscarPorCategoriaSelected() {
    if (this.selectedCategoria != '') {
      this.productoService
        .buscarPorCategoria(this.selectedCategoria)
        .subscribe((productos) => {
          this.listProductosFiltrados = productos;
          this.onBuscarPorCategoria.emit(this.listProductosFiltrados);
        });
    }else{
      this.listProductosFiltrados = [];
      this.onBuscarPorCategoria.emit(this.listProductosFiltrados);
    }
  }
}
