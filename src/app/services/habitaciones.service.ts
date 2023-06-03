import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url: string = "https://node-viernes2023.vercel.app"

  constructor(public servicioHabitacion: HttpClient) { }

  buscarHabitaciones(): Observable<any> { 
    let endpoint = "/buscarhabitaciones"
    let uri:string = this.url + endpoint
    return this.servicioHabitacion.get(uri)
  }
  

  registrarHabitaciones(datos: any): Observable<any> { 
    let endpoint = "/registrarhabitacion"
    let urlServicio: string = this.url + endpoint
    return this.servicioHabitacion.post(urlServicio, datos)
  }
  
  public buscarHabitacion(){}
  public editarHabitacion(){}

}
