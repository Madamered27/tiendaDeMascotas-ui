import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit{

  @Input()
  producto:any;
  img: string = "";
  nombre: string = "";
  id: number = 0;
  @Output()
  onEliminar: EventEmitter <number> = new EventEmitter();

  constructor(private router: Router, private productoService: ProductoService){
  }

  ngOnInit(): void {
    this.nombre = this.producto.nombre;
    this.id = this.producto.id;
    this.img = this.producto.img;

  }

  verDetalleProducto(): void{
    this.router.navigate(['producto', this.id]);
  }

  eliminarProducto(): void{
    this.productoService.eliminarProducto(this.id).subscribe(resp =>{
      console.log(resp);
    })
    this.onEliminar.emit(this.id);
  }

  editarProducto(){
    this.router.navigate(['editar', this.id]);
  }


}
