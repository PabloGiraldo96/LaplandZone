import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Reserva } from '../interfaces/Reserva';
import { ReservasService } from '../services/reservas.service';


@Component({
  selector: 'app-formularioreserva',
  templateUrl: './formularioreserva.component.html',
  styleUrls: ['./formularioreserva.component.css']
})
export class FormularioreservaComponent {

public formulario: FormGroup
public datosFormulario: any[] = []

public constructor(public constructorForm: FormBuilder, public servicio: ReservasService){
this.formulario = this.inicializarForm()
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

  this.servicio.registrarReserva(datos).subscribe((respuesta)=>{
    console.log(respuesta)
   })
  }
}
