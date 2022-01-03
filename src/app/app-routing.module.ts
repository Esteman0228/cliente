import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTarjetasComponent } from './components/add-tarjetas/add-tarjetas.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistrarUsuariosComponent } from './components/registrar-usuarios/registrar-usuarios.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';


const routes: Routes = [
  {
    path:'',
    component: InicioSesionComponent
  },
  { 
    path: 'addTarjetas', 
    component: AddTarjetasComponent
  },
  { 
    path: 'tarjetas', 
    component: TarjetasComponent
  },
  {
    path:'registrarUsuarios',
    component: RegistrarUsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }