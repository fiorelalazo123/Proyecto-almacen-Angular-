import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPrincipalComponent } from './projects/menu-principal/menu-principal.component';
import { LoginComponent } from './projects/login/login.component';
import { HomeComponent } from './projects/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroClienteComponent } from './projects/registro-cliente/registro-cliente.component';
import { ProductoPresentacionComponent } from './projects/producto-presentacion/producto-presentacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPrincipalVendedorComponent } from './projects/menu-principal-vendedor/menu-principal-vendedor.component';
import { MantenimientoProductosComponent } from './projects/mantenimiento-productos/mantenimiento-productos.component';
import { MantenimientoPresentacionComponent } from './projects/mantenimiento-presentacion/mantenimiento-presentacion.component';
import { ProductosEcoandinoComponent } from './projects/productos-ecoandino/productos-ecoandino.component';
import { CotizarPedidoComponent } from './projects/cotizar-pedido/cotizar-pedido.component';
import { MenuPrincipalAlmacenComponent } from './projects/menu-principal-almacen/menu-principal-almacen.component';
import { MantenimientoInsumosComponent } from './projects/mantenimiento-insumos/mantenimiento-insumos.component';
import { MantenimientoProveedorComponent } from './projects/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { InsumoProveedorComponent } from './projects/insumo-proveedor/insumo-proveedor.component';
import { OrdenSalidaComponent } from './projects/orden-salida/orden-salida.component';
import { OrdenEntradaComponent } from './projects/orden-entrada/orden-entrada.component';
import { OrdenMuestraUserComponent } from './projects/orden-muestra-user/orden-muestra-user.component';
import { OrdenPedidoUserComponent } from './projects/orden-pedido-user/orden-pedido-user.component';
import { OrdenPedidoComponent } from './projects/orden-pedido/orden-pedido.component';
import { BarraComponent } from './components/barra/barra.component';
import { ChartsModule } from 'ng2-charts';
import { OrdenPedidoAtendidoComponent } from './projects/orden-pedido-atendido/orden-pedido-atendido.component';
import { ReporteComponent } from './projects/reporte/reporte.component';
import { MenuPrincipalDirectivoComponent } from './projects/menu-principal-directivo/menu-principal-directivo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    MenuPrincipalVendedorComponent,
    MenuPrincipalAlmacenComponent,
    MenuPrincipalDirectivoComponent,
    MantenimientoProductosComponent,
    MantenimientoPresentacionComponent,
    MantenimientoInsumosComponent,
    MantenimientoProveedorComponent,
    LoginComponent,
    RegistroClienteComponent,
    HomeComponent,
    InsumoProveedorComponent,
    ProductoPresentacionComponent,
    ProductosEcoandinoComponent,
    CotizarPedidoComponent,
    OrdenSalidaComponent,
    OrdenEntradaComponent,
    OrdenMuestraUserComponent,
    OrdenPedidoUserComponent,
    OrdenPedidoComponent,
    BarraComponent,
    OrdenPedidoAtendidoComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
