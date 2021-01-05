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

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    LoginComponent,
    RegistroClienteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
