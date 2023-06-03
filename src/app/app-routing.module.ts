import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulariohabitacionComponent } from './formulariohabitacion/formulariohabitacion.component';
import { FormularioreservaComponent } from './formularioreserva/formularioreserva.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: "full"},
  {path:"registrohabitaciones", component: FormulariohabitacionComponent},
  {path: "registroreservas", component: FormularioreservaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
