import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  id:number=0;
  password:string='';
  nombre:string='';
  apellido:string='';
  telefono:number=0;
  direccion:string='';


  constructor(private tarjetaServices: TarjetaService, private router:Router) { }

  ngOnInit(): void {
  }

  registrar(){
    const cliente = new Clientes();
    cliente.cedula = this.id;
    cliente.password = this.password;
    cliente.nombre = this.nombre;
    cliente.apellido = this.apellido;
    cliente.telefono = this.telefono;
    cliente.direccion = this.direccion;

    this.tarjetaServices.addCliente(cliente).subscribe(i =>{
      this.router.navigate(['/'])
    });
  }

}
