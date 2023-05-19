import { Component } from '@angular/core';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  public habitacion1: Habitacion = {
    nombre: 'DreamWell room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-northern-comfort-double-1--1345x1345%2Cq%3D85.jpg?alt=media&token=aa83a0aa-7585-4e43-9791-6eda97c95be0", "https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb"],
    descripcion: "Room with two beds",
    precioNoche: 250,
    cantidadMaxima: 4
  }

  public habitacion2: Habitacion = {
    nombre: 'Rest room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-northern-comfort-double-1--1345x1345%2Cq%3D85.jpg?alt=media&token=aa83a0aa-7585-4e43-9791-6eda97c95be0", "https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb"],
    descripcion: "Room with three beds",
    precioNoche: 400,
    cantidadMaxima: 8
  }


  public habitaciones: Habitacion[] = [this.habitacion1, this.habitacion2]

  public constructor(){
    console.log(this.habitaciones)
  }


}
