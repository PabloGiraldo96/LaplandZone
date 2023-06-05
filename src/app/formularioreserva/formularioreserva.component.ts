import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';
import { HabitacionesService } from '../services/habitaciones.service';

@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {

public formulario: FormGroup
public datosFormulario: any[] = []
public habitaciones: any


public constructor(public constructorForm: FormBuilder, public servicio: ReservasService, public servicioHabitacion: HabitacionesService){
this.formulario = this.inicializarForm()
this.servicioHabitacion.buscarHabitaciones().subscribe({
  next: (respuesta) => { 
    this.habitaciones= respuesta.habitaciones
    console.log(respuesta)
}, error: (Error)=> {
    console.log(Error)
}
})
}

public inicializarForm(): FormGroup{

  return this.constructorForm.group({
    nombre: [''],
    apellido:[''],
    telefono:[''],
    fechaInicio:[''],
    fechaFinal:[''],
    numeroPersonas:[''],
    idHabitacionReserva:[''],
    costoReserva:['']
  })
}

public procesarDatos(): void {
  let datos = this.formulario.value

  this.servicio.registrarReserva(datos).subscribe({
  next: (respuesta) => { 
    location.reload()
  }, 
    error: (Error) => {
      console.log(Error)
      }
    })
  }
}
