import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjetas } from 'src/app/models/tarjetas';
import {TarjetaService} from '../../services/tarjeta-service.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  tarjetas:Tarjetas[]=[];

  constructor(private tarjetaServices: TarjetaService, private router:Router) { }

  ngOnInit(): void {
    this.tarjetaServices.getTarjetas().subscribe(data=>{
      this.tarjetas = data;
    },
    error=>{console.error(error)}
    )
    console.log(this.tarjetaServices.idCliente)
  }

  deleteTarjeta(tarjeta: Tarjetas){
    this.tarjetaServices.deleteTarjeta(tarjeta).subscribe();
  }

}
