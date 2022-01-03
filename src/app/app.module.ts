import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { AppRoutingModule } from './app-routing.module';
import { AddTarjetasComponent } from './components/add-tarjetas/add-tarjetas.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarUsuariosComponent } from '../app/components/registrar-usuarios/registrar-usuarios.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    TarjetasComponent,
    TarjetaComponent,
    InicioSesionComponent,
    AddTarjetasComponent,
    RegistrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
