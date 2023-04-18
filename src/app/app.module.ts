import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './panel/footer/footer.component';
import { NavbarComponent } from './panel/navbar/navbar.component';
import { SpinnerComponent } from './panel/spinner/spinner.component';
import { ListaProductosComponent } from './panel/lista-productos/lista-productos.component';
import { CardProductoComponent } from './panel/lista-productos/card-producto/card-producto.component';
import { ProductoComponent } from './panel/producto/producto.component';
import { NosotrosComponent } from './panel/nosotros/nosotros.component';
import { StockComponent } from './panel/stock/stock.component';
import { AgregarNuevoProductoComponent } from './panel/agregar-nuevo-producto/agregar-nuevo-producto.component';
import { FormularioComponent } from './panel/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarProductoComponent } from './panel/editar-producto/editar-producto.component';
import { BuscadorComponent } from './panel/buscador/buscador.component';
import { CarritoComponent } from './panel/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    SpinnerComponent,
    ListaProductosComponent,
    CardProductoComponent,
    ProductoComponent,
    NosotrosComponent,
    StockComponent,
    AgregarNuevoProductoComponent,
    FormularioComponent,
    EditarProductoComponent,
    BuscadorComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
