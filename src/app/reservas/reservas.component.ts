import { Component, OnInit} from '@angular/core';
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})


export class ReservasComponent {
  
test: any

public reservas: Reserva[] = []

public constructor(public servicio: ReservasService){  } 


ngOnInit(): void {
    this.servicio.buscarReservas()
    .subscribe((respuesta) => {
      this.test = respuesta.habitaciones
      console.log(this.test)
      //this.reservas = respuesta.reservas
    console.log(respuesta)
    })
  }
}
