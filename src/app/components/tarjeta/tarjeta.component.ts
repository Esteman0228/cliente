import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjetas } from 'src/app/models/tarjetas';
import { TarjetaService } from 'src/app/services/tarjeta-service.service';



@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() tarjeta: Tarjetas = new Tarjetas();
  

  constructor(private tarjetaServices: TarjetaService, private router:Router) { }

  ngOnInit(): void {
  }

  metodo(){
    let numero = this.tarjeta.numero.toString();
    let corte = numero.slice(0,-4)
    let mostrar = numero.replace(corte, "***********")
    return mostrar
  }

  onDelete(tarjeta:Tarjetas){
    this.tarjetaServices.deleteTarjeta(tarjeta).subscribe();
    this.router.navigate(['/tarjetas'])
  }

}
