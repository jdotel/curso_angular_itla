import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-actividad',
  styleUrl: './actividad.css',
  templateUrl: './actividad.html',
})
export class Actividad {}
/*
export type EstadoActividad = 'pendiente' | 'en_progreso' | 'completada';

export type Prioridad = 'baja' | 'media' | 'alta' | 'Media baja';

export interface Actividad {
  id: number;
  titulo: string;
  estado: EstadoActividad;
  prioridad: Prioridad;
}

export interface ResumenActividades {
  total: number;
  pendientes: number;
  enProgreso: number;
  completadas: number;
  titulosPrioridadAlta: string[];
}

 */
