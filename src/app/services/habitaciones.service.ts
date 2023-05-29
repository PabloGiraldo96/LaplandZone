import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {
  public url: string = "https://node-viernes2023.vercel.app"

  constructor(public servicioHabitacion: HttpClient) { }

  public buscarHabitaciones(): Observable<any> { 
    let endpoint = "/buscarhabitaciones"
    let uri = this.url + endpoint
    return this.servicioHabitacion.get(uri)
  }
  
  
  public buscarHabitacion(){}
  public crearHabitacion(){}
  public editarHabitacion(){}

}
