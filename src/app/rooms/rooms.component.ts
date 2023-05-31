import { Component } from '@angular/core';
import { Habitacion } from '../interfaces/Habitacion';
import { HabitacionesService } from '../services/habitaciones.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent {
 
  public habitaciones: Habitacion[] = []

  public constructor(public servicio: HabitacionesService ){
    this.servicio.buscarHabitaciones()
    .subscribe((respuesta) => {
      console.log(respuesta);
      this.habitaciones = respuesta.habitaciones
    })
  }

showModal = false;
  fotoSeleccionada!: string;

  openModal(foto: string) {
    this.fotoSeleccionada = foto;
    this.showModal = true;
  }
}
