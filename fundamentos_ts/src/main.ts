import { actividades } from "./datos.js";
import { GestorActividades } from "./gestor.js";
import { crearResumen, presentarResumen } from "./resumen.js";
import { leerActividadesJson } from "./validacion.js";

async function cargarActividades(): Promise<string> {
  return Promise.resolve(JSON.stringify(actividades));
}

async function iniciar(): Promise<void> {
  try {
    const texto = await cargarActividades();
    const actividadesLeidas = leerActividadesJson(texto);
    const gestor = new GestorActividades(actividadesLeidas);
    const actualizadas = gestor.completar(3);

    console.log(presentarResumen(crearResumen(actualizadas)));
  } catch (error: unknown) {
    const mensaje =
      error instanceof Error ? error.message : "Error desconocido";
    console.error(`No fue posible crear el resumen: ${mensaje}`);
  }
}

void iniciar();


/* import { actividades } from "./datos.js";
import { GestorActividades } from "./gestor.js";
import { crearResumen, presentarResumen } from "./resumen.js";
import { leerActividadesJson } from "./validacion.js";

const texto = JSON.stringify(actividades);
const actividadesLeidas = leerActividadesJson(texto);
const gestor = new GestorActividades(actividadesLeidas);

console.log(presentarResumen(crearResumen(gestor.completar(3)))); */

/* import { actividades } from "./datos.js";
import { GestorActividades } from "./gestor.js";
import { crearResumen, presentarResumen } from "./resumen.js";

const gestor = new GestorActividades(actividades);
const actualizadas = gestor.completar(3);

console.log(presentarResumen(crearResumen(actualizadas)));
console.log("---");
console.log(presentarResumen(crearResumen(actividades)));

 */
/* import { actividades } from "./datos.js";
import { crearResumen, presentarResumen } from "./resumen.js";

console.log(presentarResumen(crearResumen(actividades))); */

//Investigar excepciones con consola, depurador y un caso reproducible
/* import type { Actividad } from "./tipos.js";

export function describir(actividad: Actividad): string {
  return `${actividad.titulo} (${actividad.estado})`;
}

const actividades: Actividad[] = [
  { id: 1, titulo: "Revisar HTML", estado: "completada" },
];

function describirPrimera(lista: Actividad[]): string {
  const primera = lista[0];
  if (primera === undefined) {
    return "Sin actividades";
  }
  return describir(primera);
}

console.log(describirPrimera(actividades));
console.log(describirPrimera([]));
 */
//Esperar una promesa con async y await
/* function cargar(nombre: string, exito: boolean): Promise<string> {
  return new Promise((cumplir, rechazar) => {
    setTimeout(() => {
      if (exito) {
        cumplir(`${nombre} listo`);
      } else {
        rechazar(new Error(`${nombre} falló`));
      }
    }, 300);
  });
}

async function iniciar(): Promise<void> {
  console.log("1. inicio");

  try {
    const [actividades, usuarios] = await Promise.all([
      cargar("actividades", true),
      cargar("usuarios", true),
    ]);
    console.log(`2. ${actividades}`);
    console.log(`3. ${usuarios}`);

    await cargar("comentarios", false);
    console.log("no se llega aquí");
  } catch (error: unknown) {
    const mensaje = error instanceof Error ? error.message : "desconocido";
    console.log(`4. ${mensaje}`);
  } finally {
    console.log("5. terminado");
  }
}

iniciar(); */

//Reconocer los estados de una promesa
/* function cargarTitulo(exito: boolean): Promise<string> {
  return new Promise((cumplir, rechazar) => {
    setTimeout(() => {
      if (exito) {
        cumplir("Practicar TypeScript");
      } else {
        rechazar(new Error("No se pudo cargar"));
      }
    }, 300);
  });
}

console.log("1. inicio");

cargarTitulo(true)
  .then((titulo) => console.log(`3. ${titulo}`))
  .catch((error: unknown) => console.log("3. error"));

cargarTitulo(false)
  .then((titulo) => console.log(`4. ${titulo}`))
  .catch((error: unknown) => {
    const mensaje = error instanceof Error ? error.message : "desconocido";
    console.log(`4. ${mensaje}`);
  });

console.log("2. continúa"); */

//Convertir datos entre objetos y JSON
/* import type { Actividad } from "./tipos.js";

function aTexto(actividad: Actividad): string {
  return JSON.stringify(actividad);
}

function desdeTexto(texto: string): Actividad | undefined {
  const valor: unknown = JSON.parse(texto);

  if (typeof valor !== "object" || valor === null) {
    return undefined;
  }
  if (!("id" in valor) || !("titulo" in valor) || !("estado" in valor)) {
    return undefined;
  }
  if (typeof valor.id !== "number" || typeof valor.titulo !== "string") {
    return undefined;
  }

  return valor as Actividad;
}

const original: Actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
};
const texto = aTexto(original);

console.log(texto);
console.log(desdeTexto(texto)?.titulo ?? "Datos inválidos");
console.log(desdeTexto('{"id":"uno"}')?.titulo ?? "Datos inválidos"); */

//Conectar módulos mediante exportaciones e importaciones
/* import type { Actividad } from "./tipos.js";
import { crearEtiqueta } from "./etiquetas.js";

const actividades: Actividad[] = [
  { id: 1, titulo: "Revisar HTML", estado: "completada" },
  { id: 2, titulo: "Practicar TypeScript", estado: "pendiente" },
];

for (const actividad of actividades) {
  console.log(crearEtiqueta(actividad));
}
 */

//Leer clases, constructores, métodos y visibilidad necesaria para Angular
/* type EstadoActividad = "pendiente" | "completada";

interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
}

class GestorActividades {
  constructor(private readonly actividades: Actividad[]) {}

  buscarPorId(id: number): Actividad | undefined {
    return this.actividades.find((actividad) => actividad.id === id);
  }

  contarPorEstado(estado: EstadoActividad): number {
    return this.actividades.filter((actividad) => actividad.estado === estado)
      .length;
  }

  describir(): string {
    return `${this.actividades.length} actividades · ${this.contarPorEstado("pendiente")} pendientes`;
  }
}

const gestor = new GestorActividades([
  { id: 1, titulo: "Revisar HTML", estado: "completada" },
  { id: 2, titulo: "Practicar TypeScript", estado: "pendiente" },
]);

console.log(gestor.describir());
console.log(gestor.buscarPorId(2)?.titulo ?? "No encontrada");
console.log(gestor.buscarPorId(9)?.titulo ?? "No encontrada");
 */
//Definir alias, interfaces y funciones tipadas para el dominio
/* type EstadoActividad = "pendiente" | "en_progreso" | "completada";

interface Actividad {
  readonly id: number;
  titulo: string;
  estado: EstadoActividad;
  descripcion?: string;
}

function describir(actividad: Actividad): string {
  const descripcion = actividad.descripcion ?? "Sin descripción";
  return `${actividad.titulo} (${actividad.estado}) · ${descripcion}`;
}

function marcarCompletada(actividad: Actividad): Actividad {
  return { ...actividad, estado: "completada" };
}

const actividades: Actividad[] = [
  {
    id: 1,
    titulo: "Revisar HTML",
    estado: "completada",
    descripcion: "Comprobar landmarks",
  },
  { id: 2, titulo: "Practicar TypeScript", estado: "pendiente" },
];

console.log(describir(actividades[0] ?? actividades[1]!));
console.log(describir(marcarCompletada(actividades[1]!)));
console.log(actividades[1]!.estado); */

//Representar alternativas con uniones y ausencia explícita
/* type EstadoActividad = "pendiente" | "en_progreso" | "completada";

function etiquetaEstado(estado: EstadoActividad): string {
  if (estado === "en_progreso") {
    return "En progreso";
  }
  if (estado === "completada") {
    return "Completada";
  }
  return "Pendiente";
}

function buscarEstado(
  estados: EstadoActividad[],
  objetivo: EstadoActividad,
): EstadoActividad | undefined {
  return estados.find((estado) => estado === objetivo);
}

const estados: EstadoActividad[] = ["pendiente", "completada"];

console.log(etiquetaEstado("en_progreso"));
console.log(etiquetaEstado(estados[0] ?? "pendiente"));

const encontrado = buscarEstado(estados, "en_progreso");
if (encontrado === undefined) {
  console.log("Ninguna en ese estado");
} else {
  console.log(etiquetaEstado(encontrado));
}
 */
//Comparar inferencia y anotaciones explícitas

/* const titulo = "Practicar TypeScript";
const prioridades: string[] = [];

function crearEtiqueta(texto: string, cantidad: number): string {
  return `${texto}: ${cantidad}`;
}

prioridades.push("alta");
prioridades.push("media");

console.log(titulo);
console.log(crearEtiqueta("Pendientes", prioridades.length));
console.log(prioridades); */

//Representar objetos y actualizarlos mediante copias con spread
/* const actividad = {
  id: 1,
  titulo: "Practicar TypeScript",
  estado: "pendiente",
};

const actualizada = { ...actividad, estado: "completada" };

console.log(actividad.estado);
console.log(actualizada.estado);
console.log(actividad === actualizada);
console.log(actividad.titulo === actualizada.titulo); */

//Buscar, filtrar y transformar con métodos de arreglos
/* const titulos = ["Revisar HTML", "Practicar TypeScript", "Comprobar foco"];

const encontrado = titulos.find((titulo) => titulo.includes("TypeScript"));
const largos = titulos.filter((titulo) => titulo.length > 12);
const etiquetas = titulos.map((titulo) => `Actividad: ${titulo}`);

console.log(encontrado ?? "No encontrado");
console.log(largos.length);
console.log(etiquetas);
console.log(titulos.length);

const sinCoincidencias = titulos.filter((titulo) => titulo.includes("Angular"));
console.log(sinCoincidencias.length); */

//Repetir una operación mediante ciclos controlados
//Contar y clasificar en una pasada

/* function resumirEstados(estados: string[]): string {
  let pendientes = 0;
  let completadas = 0;
  let otras = 0;

  for (const estado of estados) {
    if (estado === "pendiente") {
      pendientes = pendientes + 1;
    } else if (estado === "completada") {
      completadas = completadas + 1;
    } else {
      otras = otras + 1;
    }
  }

  return `${pendientes} pendientes · ${completadas} completadas · ${otras} otras`;
}

console.log(
  resumirEstados(["pendiente", "completada", "pendiente", "en progreso"]),
);
console.log(resumirEstados([])); */

//Colecciones y objetos
/* function obtenerPrimerTitulo(titulos: string[]): string {
  if (titulos.length === 0) {
    return "Sin actividades";
  }
  return titulos[0] ?? "Sin actividades";
}

function describirCantidad(titulos: string[]): string {
  if (titulos.length === 0) {
    return "No hay actividades todavía";
  }
  if (titulos.length === 1) {
    return "Hay 1 actividad";
  }
  return `Hay ${titulos.length} actividades`;
}

const conDatos = ["Revisar contraste", "Practicar TypeScript"];
const vacia: string[] = [];

console.log(obtenerPrimerTitulo(conDatos));
console.log(obtenerPrimerTitulo(vacia));
console.log(describirCantidad(conDatos));
console.log(describirCantidad(vacia));
console.log(describirCantidad(["Sola"]));


//Prueba de immpresion en consola 
const titulos = ["A", "B", "C"];
console.log(titulos[titulos.length]); */

//Clasificar una actividad
/* const estado = "pendiente";
const prioridad = "alta";
const diasRestantes = 0;

const estaPendiente = estado === "pendiente";
const esUrgente = prioridad === "alta";
const venceHoy = diasRestantes === 0;

const requiereAtencion = estaPendiente && (esUrgente || venceHoy);
const sePuedeArchivar = !estaPendiente && !venceHoy;

console.log(estaPendiente);
console.log(venceHoy);
console.log(requiereAtencion);
console.log(sePuedeArchivar);
 */

//Definir y llamar funciones con parámetros y retorno
/* function calcularPendientes(total: number, completadas: number): number {
  return total - completadas;
}

function calcularPorcentaje(parte: number, total: number): number {
  return (parte / total) * 100;
}

const total = 8;
const completadas = 3;

const pendientes = calcularPendientes(total, completadas);
const porcentaje = calcularPorcentaje(pendientes, total);

console.log(pendientes);
console.log(porcentaje.toFixed(1));
console.log(calcularPendientes(2, 2)); */

//revision de impresion por consola de variables y tipos de datos

function sumar(a: number, b: number): number {
  return a + b;
  console.log("sumado");
}
console.log(sumar(2, 3));

/* const titulo = "Preparar estructura HTML";

let cantidadPendiente = 3;
const panelVisible = true;

cantidadPendiente = 2;

console.log(titulo);
console.log(cantidadPendiente);
console.log(panelVisible);
 */
/* const pendientesTexto = "3";
const pendientes = Number(pendientesTexto);
const enProgreso = 1;

const abiertas = pendientes + enProgreso;
const porcentaje = (pendientes / abiertas) * 100;

console.log(abiertas);
console.log(porcentaje);
console.log(`Pendientes: ${porcentaje.toFixed(1)} %`); */
