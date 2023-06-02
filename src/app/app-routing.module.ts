import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormulariohabitacionComponent } from './formulariohabitacion/formulariohabitacion.component';

const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch: "full"},
  {path:"registrohabitaciones", component: FormulariohabitacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
