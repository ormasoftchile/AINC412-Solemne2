import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelo/alumno';
import { AlumnosService } from '../servicios/alumnos.service';

@Component({
  selector: 'co-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  alumnos: Observable<Alumno[]>;
  //alumnos: Alumno[];
  constructor(
    private alumnosService: AlumnosService,
  ) { 
    this.alumnos = alumnosService.getAlumnos();
  }

  ngOnInit(): void {
  }

}
