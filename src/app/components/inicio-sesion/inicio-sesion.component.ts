import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {


  id:number = 0;
  password: string = '';

  clientes:Clientes[]=[];

  public idCliente: number = 0;

  constructor(private tarjetaServices: TarjetaService, private router:Router) { }

  ngOnInit(): void {
    this.tarjetaServices.getClientes().subscribe(data=>{
      this.clientes = data;
    },
    error=>{console.error(error)}
    )
  }
  

  onSubmit(){
    this.clientes.map(item=>
        {
          if(this.id === item.cedula){
            if(this.password === item.password){
              console.log('sesión iniciada');
              this.tarjetaServices.idCliente = item.cedula;
              this.router.navigate(['/tarjetas'])
            }else{
              console.log('contraseña errada');
              return;
            }
          }else{
            console.log('no existe el usuario')
            return;
          }
        }
      )
  }


}
