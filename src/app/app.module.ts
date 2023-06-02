import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { FooterComponent } from './footer/footer.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ReservasComponent } from './reservas/reservas.component';
import { FormulariohabitacionComponent } from './formulariohabitacion/formulariohabitacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DescripcionComponent,
    FooterComponent,
    RoomsComponent,
    ReservasComponent,
    FormulariohabitacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
