import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Habitacion } from '../interfaces/Habitacion';
import {HabitacionesService} from '../services/habitaciones.service' 





@Component({
  selector: 'app-formulariohabitacion',
  templateUrl: './formulariohabitacion.component.html',
  styleUrls: ['./formulariohabitacion.component.css']
})
export class FormulariohabitacionComponent {

public formulario: FormGroup 
public datosFormulario: any[] = []

public constructor(public constructorForm: FormBuilder, public servicio: HabitacionesService){
    this.formulario = this.inicializarForm()
}

 public inicializarForm(): FormGroup {

  return this.constructorForm.group({
    nombre: [''],
    foto: [''],
    descripcion:[''],
    precioNoche:[''],
    cantidadMaxima:['']
  })

 }

 public procesarDatos(): void {
    
let datos = this.formulario.value

this.servicio.registrarHabitaciones(datos)
.subscribe((respuesta)=> {
console.log(respuesta)
}) 

}



}
