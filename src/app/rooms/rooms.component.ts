import { Component } from '@angular/core';
import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent {
  public habitacion1: Habitacion = {
    nombre: 'DarkGrey room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202104281326030.Nangu_Wildernesshotel_hotelrooms19.jpg?alt=media&token=58e32f98-247d-4cf8-a4cf-647cb9ced622"],
    descripcion: "Room with queen bed, little desk, two chairs to sit and rest and private bathroom",
    precioNoche: 350,
    cantidadMaxima: 3
  }

  public habitacion2: Habitacion = {
    nombre: 'Wilderness room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-northern-comfort-double-1--1345x1345%2Cq%3D85.jpg?alt=media&token=aa83a0aa-7585-4e43-9791-6eda97c95be0", "https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/lapland-hotels-sky-ounasvaara-northern-comfort-twin-4-1345x1345%2Cq%3D85.jpg?alt=media&token=2d59ae9f-6595-48d7-8d98-885d5a17bcdb"],
    descripcion: "Room equiped with a double bed, a little couch and private bathroom" ,
    precioNoche: 230,
    cantidadMaxima: 2
  }
  public habitacion3: Habitacion = {
    nombre: 'Panorama room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202104281339100._Wildernesshotel_panoramalogcabin24.jpg?alt=media&token=c49b5bb7-1461-49a3-9bde-425d87cf3631"],
    descripcion: "Room with King bed, chairs, table to share foods and private bathroom",
    precioNoche: 800,
    cantidadMaxima: 4
  }
  public habitacion4: Habitacion = {
    nombre: 'Aurora Cabin room',
    foto: ["https://firebasestorage.googleapis.com/v0/b/laplandzone.appspot.com/o/202303211334510.aurora_hut_aurora_Wilderness_hotel_Nangu.jpg?alt=media&token=d99ceb04-f7c5-4cf0-add5-6fcdcb74e8f3"],
    descripcion: "Hut with 'free watching' view to the Northern lights skyes on the seasons, one personal bed and oil lamp",
    precioNoche: 1200,
    cantidadMaxima: 2
  }


  public habitaciones: Habitacion[] = [this.habitacion1, this.habitacion2, this.habitacion3, this.habitacion4]

  public constructor(){
    console.log(this.habitaciones)
  }


}
