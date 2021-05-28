import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '../modelo/alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  // alumnos: Alumno[] = [
  //   {
  //     id: '1', nombre: 'Imagen web', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1563874257547-d19fbb71b46c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '2', nombre: 'Imagen web 2', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1614178082459-8d801006f86f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '3', nombre: 'Imagen web 3', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1611223426643-fa293cb2efbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '4', nombre: 'Imagen web 4', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '5', nombre: 'Imagen web 5', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1543249098-142376d7f72b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '6', nombre: 'Imagen web 6', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1510272206246-9c2faaf4b4b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '7', nombre: 'Imagen web 7', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1553830591-42e4fd7035ec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() },
  //   {
  //     id: '8', nombre: 'Imagen web 8', descripcion: 'imagen de ejemplo', miniatura: 'https://images.unsplash.com/photo-1586765677067-f8030bd8e303?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHRodW1ibmFpbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //     anoIngreso: 2020, fechaNacimiento: new Date() }
  // ]

  constructor(private http :HttpClient){
  }

  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>('http://cristianormazaballaravel.test/api/v1/alumnos');
  }
  // getAlumnos() {
  //   return this.alumnos;
  // }
}
