import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '../modelo/alumno';

@Component({
  selector: 'co-alumno',
  templateUrl: './alumno.component.html',
  styles: [
  ]
})
export class AlumnoComponent implements OnInit {
  @Input() alumno!: Alumno;
  constructor() { }

  ngOnInit(): void {
  }

}
