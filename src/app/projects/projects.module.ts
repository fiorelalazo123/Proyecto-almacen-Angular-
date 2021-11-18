import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainer } from './projects.container';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { MantenimientoProductosComponent } from './mantenimiento-productos/mantenimiento-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductoPresentacionComponent } from './producto-presentacion/producto-presentacion.component';
import { MenuPrincipalVendedorComponent } from './menu-principal-vendedor/menu-principal-vendedor.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { MantenimientoPresentacionComponent } from './mantenimiento-presentacion/mantenimiento-presentacion.component';
import { ProductosEcoandinoComponent } from './productos-ecoandino/productos-ecoandino.component';
import { CotizarPedidoComponent } from './cotizar-pedido/cotizar-pedido.component';
import { MenuPrincipalAlmacenComponent } from './menu-principal-almacen/menu-principal-almacen.component';
import { MantenimientoProveedorComponent } from './mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MantenimientoInsumosComponent } from './mantenimiento-insumos/mantenimiento-insumos.component';
import { InsumoProveedorComponent } from './insumo-proveedor/insumo-proveedor.component';
import { OrdenEntradaComponent } from './orden-entrada/orden-entrada.component';
import { OrdenSalidaComponent } from './orden-salida/orden-salida.component';
import { OrdenMuestraUserComponent } from './orden-muestra-user/orden-muestra-user.component';
import { OrdenPedidoUserComponent } from './orden-pedido-user/orden-pedido-user.component';
import { OrdenPedidoComponent } from './orden-pedido/orden-pedido.component';
import { BarraComponent } from '../components/barra/barra.component';
import { OrdenPedidoAtendidoComponent } from './orden-pedido-atendido/orden-pedido-atendido.component';
import { ReporteComponent } from './reporte/reporte.component';
import { MenuPrincipalDirectivoComponent } from './menu-principal-directivo/menu-principal-directivo.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectsContainer,
    RegistroClienteComponent,
    MantenimientoProductosComponent,
    ProductoPresentacionComponent,
    MenuPrincipalVendedorComponent,
    MenuPrincipalComponent,
    MantenimientoPresentacionComponent,
    ProductosEcoandinoComponent,
    CotizarPedidoComponent,
    InsumoProveedorComponent,
    MenuPrincipalAlmacenComponent,
    MantenimientoProveedorComponent,
    MantenimientoInsumosComponent,
    OrdenEntradaComponent,
    OrdenSalidaComponent,
    OrdenMuestraUserComponent,
    OrdenPedidoUserComponent,
    OrdenPedidoComponent,
    BarraComponent,
    OrdenPedidoAtendidoComponent,
    ReporteComponent,
    MenuPrincipalDirectivoComponent

  ],
  exports: [
    ProjectsComponent,
    ProjectsContainer,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProjectsModule { }
