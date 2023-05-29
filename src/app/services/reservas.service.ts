import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})


export class ReservasService {

  public url: string = "https://node-viernes2023.vercel.app"

  constructor(public servicioReserva: HttpClient) { }

  public buscarReservas(): Observable<any> { 
    let endpoint = "/buscarreservas"
    let uri = this.url + endpoint
    return this.servicioReserva.get(uri)
  }

  public buscarReserva(){}
  public crearReserva(){}
  public editarReserva(){}

}
