import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit{

  isCargando: boolean = true;

  listCategorias: Array<any> = ['juguetes_perros', 'juguetes_gato'];
  isMensajeMostrado: boolean = false;
  nombre: string = "";
  categoria: string = "";
  stock: number = 0;
  precio: number = 0;
  img: string = "";
  id: number = 0;
  archivo!: File;

  miFormulario: FormGroup = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    categoria: this.fb.control('', [Validators.required]),
    img: this.fb.control('', [Validators.required]),
    precio: this.fb.control('0', [Validators.required]),
    stock: this.fb.control(0, [Validators.required, Validators.min(1)]),
    id: this.fb.control(0)
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService, private aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.id = +this.aRoute.snapshot.paramMap.get("id")!;
    this.productoService.getProducto(this.id).subscribe( resp => {
      this.miFormulario = this.fb.group({
        nombre: this.fb.control(resp['nombre'], [Validators.required, Validators.minLength(5)]),
        categoria: this.fb.control(resp['categoria'], [Validators.required]),
        img: this.fb.control("", [Validators.required]),
        precio: this.fb.control(resp['precio'], [Validators.required]),
        stock: this.fb.control(resp['stock'], [Validators.required, Validators.min(1)]),
        id: this.fb.control(resp['id'])
      });
    })
  }


  modificar(){

    const data = new FormData();
    data.append("nombre", this.miFormulario.get("nombre")?.value);
    data.append("categoria", this.miFormulario.get("categoria")?.value);
    data.append("precio", this.miFormulario.get("precio")?.value);
    data.append("stock", this.miFormulario.get("stock")?.value);
    data.append("file", this.archivo);

    this.productoService.modificarProducto(this.id, data).subscribe()
    this.isMensajeMostrado = true;
  }

  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }

  onArchivoSeleccionado(a: any) {
    this.archivo = a.target.files[0];

  }

}
