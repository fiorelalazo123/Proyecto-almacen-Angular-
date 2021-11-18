import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CotizarPedidoComponent } from './projects/cotizar-pedido/cotizar-pedido.component';
import { HomeComponent } from './projects/home/home.component';
import { InsumoProveedorComponent } from './projects/insumo-proveedor/insumo-proveedor.component';
import { LoginComponent } from './projects/login/login.component';
import { MantenimientoInsumosComponent } from './projects/mantenimiento-insumos/mantenimiento-insumos.component';
import { MantenimientoPresentacionComponent } from './projects/mantenimiento-presentacion/mantenimiento-presentacion.component';
import { MantenimientoProductosComponent } from './projects/mantenimiento-productos/mantenimiento-productos.component';
import { MantenimientoProveedorComponent } from './projects/mantenimiento-proveedor/mantenimiento-proveedor.component';
import { MenuPrincipalAlmacenComponent } from './projects/menu-principal-almacen/menu-principal-almacen.component';
import { MenuPrincipalVendedorComponent } from './projects/menu-principal-vendedor/menu-principal-vendedor.component';
import { MenuPrincipalComponent } from './projects/menu-principal/menu-principal.component';
import { OrdenEntradaComponent } from './projects/orden-entrada/orden-entrada.component';
import { OrdenMuestraUserComponent } from './projects/orden-muestra-user/orden-muestra-user.component';
import { OrdenPedidoUserComponent } from './projects/orden-pedido-user/orden-pedido-user.component';
import { OrdenPedidoComponent } from './projects/orden-pedido/orden-pedido.component';
import { OrdenSalidaComponent } from './projects/orden-salida/orden-salida.component';
import { ProductoPresentacionComponent } from './projects/producto-presentacion/producto-presentacion.component';
import { ProductosEcoandinoComponent } from './projects/productos-ecoandino/productos-ecoandino.component';
import { RegistroClienteComponent } from './projects/registro-cliente/registro-cliente.component';
import { BarraComponent} from './components/barra/barra.component';
import { OrdenPedidoAtendidoComponent } from './projects/orden-pedido-atendido/orden-pedido-atendido.component';
import { ReporteComponent } from './projects/reporte/reporte.component';
import { MenuPrincipalDirectivoComponent } from './projects/menu-principal-directivo/menu-principal-directivo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'menu-principal-vendedor', component: MenuPrincipalVendedorComponent },
  { path: 'menu-principal-almacen', component: MenuPrincipalAlmacenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro-cliente', component: RegistroClienteComponent },
  { path: 'mantenimiento-productos', component: MantenimientoProductosComponent },
  { path: 'mantenimiento-presentacion', component: MantenimientoPresentacionComponent },
  { path: 'mantenimiento-proveedor', component: MantenimientoProveedorComponent },
  { path: 'mantenimiento-insumos', component: MantenimientoInsumosComponent },
  { path: 'insumo-proveedor', component: InsumoProveedorComponent },
  { path: 'producto-presentacion', component: ProductoPresentacionComponent },
  { path: 'productos-ecoandino', component: ProductosEcoandinoComponent },
  { path: 'cotizar-producto', component: CotizarPedidoComponent },
  { path: 'orden-entrada', component: OrdenEntradaComponent },
  { path: 'orden-salida', component: OrdenSalidaComponent },
  { path: 'orden-muestraUser', component: OrdenMuestraUserComponent },
  { path: 'orden-pedidoUser', component: OrdenPedidoUserComponent },
  { path: 'orden-pedido', component: OrdenPedidoComponent },
  { path: 'graficos' , component: BarraComponent},
  { path: 'orden-pedido-atendido' , component: OrdenPedidoAtendidoComponent},
  { path: 'reporte' , component: ReporteComponent},
  { path: 'menu-principal-directivo' , component: MenuPrincipalDirectivoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
