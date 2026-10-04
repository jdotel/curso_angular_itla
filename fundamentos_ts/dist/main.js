"use strict";
/* const titulo = "Preparar estructura HTML";

let cantidadPendiente = 3;
const panelVisible = true;

cantidadPendiente = 2;

console.log(titulo);
console.log(cantidadPendiente);
console.log(panelVisible);
 */
const pendientesTexto = "3";
const pendientes = Number(pendientesTexto);
const enProgreso = 1;
const abiertas = pendientes + enProgreso;
const porcentaje = (pendientes / abiertas) * 100;
console.log(abiertas);
console.log(porcentaje);
console.log(`Pendientes: ${porcentaje.toFixed(1)} %`);
