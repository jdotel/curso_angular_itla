//Repetir una operación mediante ciclos controlados
//Contar y clasificar en una pasada


function resumirEstados(estados: string[]): string {
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
console.log(resumirEstados([]));


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
