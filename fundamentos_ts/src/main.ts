//Clasificar una actividad
const estado = "pendiente";
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
