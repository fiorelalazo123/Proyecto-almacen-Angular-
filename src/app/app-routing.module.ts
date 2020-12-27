import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './projects/home/home.component';
import { LoginComponent } from './projects/login/login.component';
import { MantenimientoProductosComponent } from './projects/mantenimiento-productos/mantenimiento-productos.component';
import { MenuPrincipalComponent } from './projects/menu-principal/menu-principal.component';
import { RegistrarProductoComponent } from './projects/registrar-producto/registrar-producto.component';
import { RegistroClienteComponent } from './projects/registro-cliente/registro-cliente.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro-cliente', component: RegistroClienteComponent },
  { path: 'mantenimiento-productos', component: MantenimientoProductosComponent },
  { path: 'registrar-producto', component: RegistrarProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
