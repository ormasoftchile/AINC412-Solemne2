import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { AlumnosService } from './servicios/alumnos.service';
import { AlumnoComponent } from './alumnos/alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AlumnosComponent,
    AcercadeComponent,
    AlumnoComponent,
  ],
  imports: [
    routes,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AlumnosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
