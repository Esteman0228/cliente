import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  clientes: Clientes[] = [];

  constructor() { }

  ngOnInit(): void {
    this.clientes = [
      {
        cedula: 1143389944,
        password:'123456',
        nombre: 'Jean',
        apellido: 'Correa',
        telefono: 3002435319,
        direccion: 'B/lezo'
      },
      {
        cedula: 45454704,
        password:'123456',
        nombre: 'Sara',
        apellido: 'Correa',
        telefono: 3132198490,
        direccion: 'B/lezo'
      }
    ];
  }

}
