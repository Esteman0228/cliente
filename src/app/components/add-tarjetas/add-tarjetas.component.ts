import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjetas } from 'src/app/models/tarjetas';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';

@Component({
  selector: 'app-add-tarjetas',
  templateUrl: './add-tarjetas.component.html',
  styleUrls: ['./add-tarjetas.component.css']
})
export class AddTarjetasComponent implements OnInit {

  numero:number=0;
  banco:string='';
  red:string='';
  fecha:string='';

// @Input() idCliente:string;

  constructor(private tarjetaServices: TarjetaService, private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    const tarjeta = new Tarjetas();
    tarjeta.numero = this.numero;
    tarjeta.banco = this.banco;
    tarjeta.red = this.red;
    tarjeta.fecha = this.fecha;
    tarjeta.cliente = this.tarjetaServices.idCliente;

    this.tarjetaServices.addTarjeta(tarjeta).subscribe(i =>{
      this.router.navigate(['/tarjetas'])
    });
  }

}
