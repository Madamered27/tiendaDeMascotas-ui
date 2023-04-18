import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {


  listCategorias: Array<any> = ['juguetes_perros', 'juguetes_gato'];
  isMensajeMostrado: boolean = false;
  archivo!: File;


  miFormulario: FormGroup = this.fb.group({
    nombre: this.fb.control('', [Validators.required, Validators.minLength(5)]),
    categoria: this.fb.control('', [Validators.required]),
    img: this.fb.control('', [Validators.required]),
    precio: this.fb.control('0', [Validators.required]),
    stock: this.fb.control(0, [Validators.required, Validators.min(1)]),
  });

  constructor(private fb: FormBuilder, private productoService: ProductoService) {}


  agregar(){

    const data = new FormData();
    data.append("nombre", this.miFormulario.get("nombre")?.value);
    data.append("categoria", this.miFormulario.get("categoria")?.value);
    data.append("precio", this.miFormulario.get("precio")?.value);
    data.append("stock", this.miFormulario.get("stock")?.value);
    data.append("id", this.miFormulario.get("id")?.value);
    data.append("file", this.archivo);

    this.productoService.agregarProducto(data).subscribe( res => {
      this.isMensajeMostrado = true;
    });


    this.miFormulario.reset();
  }


  eliminarMensaje(){
    this.isMensajeMostrado = false;
  }


  onArchivoSeleccionado(a: any) {
    this.archivo = a.target.files[0];

  }


}
