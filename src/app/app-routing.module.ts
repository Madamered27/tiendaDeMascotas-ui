import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PanelComponent } from './panel/panel.component';
import { ListaProductosComponent } from './panel/lista-productos/lista-productos.component';
import { NosotrosComponent } from './panel/nosotros/nosotros.component';
import { ProductoComponent } from './panel/producto/producto.component';
import { StockComponent } from './panel/stock/stock.component';
import { AgregarNuevoProductoComponent } from './panel/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { EditarProductoComponent } from './panel/editar-producto/editar-producto.component';
import { CarritoComponent } from './panel/carrito/carrito.component';

const routes: Routes = [
  {path: "", redirectTo: "layout", pathMatch: "full"},
  {path:"layout", component: LayoutComponent},
  {path:"panel", component:PanelComponent},
  {path:"productos", component:ListaProductosComponent},
  {path:"producto/:id", component: ProductoComponent},
  {path:"nosotros", component:NosotrosComponent},
  {path:"stock", component:StockComponent},
  {path:"carrito", component:CarritoComponent},
  {path:"carrito/:cantidad", component:CarritoComponent},
  {path:"agregarProducto", component:AgregarNuevoProductoComponent},
  {path:"editar/:id", component: EditarProductoComponent},
  {path:"**", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
