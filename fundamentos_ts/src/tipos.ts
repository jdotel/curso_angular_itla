export type EstadoActividad = "pendiente" | "en_progreso" | "completada";

export interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
}
