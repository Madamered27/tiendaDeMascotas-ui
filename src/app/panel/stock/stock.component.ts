import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit{

  listProductos: Array<any> = []
  isCargando: boolean = true;

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.getConsultarStock();
  }

  getConsultarStock(): void{
    this.productoService.getConsultarStock().subscribe(productos =>{
      this.listProductos = productos
      this.isCargando = false;
    })
  }

}
