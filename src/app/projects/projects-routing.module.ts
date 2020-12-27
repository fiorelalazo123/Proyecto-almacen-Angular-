import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProjectsContainer } from './projects.container';

const route: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
