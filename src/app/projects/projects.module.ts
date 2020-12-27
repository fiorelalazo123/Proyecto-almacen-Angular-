import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsContainer } from './projects.container';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { MantenimientoProductosComponent } from './mantenimiento-productos/mantenimiento-productos.component';
import { RegistrarProductoComponent } from './registrar-producto/registrar-producto.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsContainer,
    RegistroClienteComponent,
    MantenimientoProductosComponent,
    RegistrarProductoComponent,
  ],
  exports: [
    ProjectsComponent,
    ProjectsContainer,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProjectsModule { }
