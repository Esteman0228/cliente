import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarjetas } from '../models/tarjetas';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService{

  public idCliente:number =0;

  constructor(private http:HttpClient) { }

  tarjetasUrl:string='http://localhost:8080/api/tarjetas/';
  clientesUrl:string='http://localhost:8080/api/clientes/'
  httpOptions={
    headers:{
      'Accept': 'application/json',
      'Content-Type':'aplication/json'
    }
  }

  getTarjetas():Observable<Tarjetas[]>{
    return this.http.get<Tarjetas[]>(this.tarjetasUrl+"query?cliente="+this.idCliente)
  }

  addTarjeta(tarjeta:Tarjetas):Observable<Tarjetas>{
    return this.http.post<Tarjetas>(this.tarjetasUrl, tarjeta);
  }

  deleteTarjeta(tarjeta:Tarjetas):Observable<Tarjetas>{
    console.log(this.tarjetasUrl+tarjeta.numero)
    return this.http.delete<Tarjetas>(this.tarjetasUrl + tarjeta.numero)
  }

  getClientes():Observable<Clientes[]>{
    console.log(this.clientesUrl)
    return this.http.get<Clientes[]>(this.clientesUrl)
  }
  
  addCliente(cliente:Clientes):Observable<Clientes>{
    return this.http.post<Clientes>(this.clientesUrl, cliente)
  }
}
