import { Component } from '@angular/core';
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})


export class ReservasComponent {
  
public reservas: Reserva[] = []

public constructor(public servicio: ReservasService){
    this.servicio.buscarReservas()
    .subscribe((respuesta) => {
      console.log(respuesta)
      this.reservas = respuesta.reservas
    })
  } 
}
