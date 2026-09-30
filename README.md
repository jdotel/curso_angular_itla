# 🚀 Curso de Angular y Fundamentos de TypeScript

Este repositorio contiene los proyectos y ejercicios prácticos desarrollados durante el curso de Angular y TypeScript. Está estructurado como un monorepo que separa los conceptos fundamentales del lenguaje de la aplicación principal.

## 📂 Estructura del Repositorio

El proyecto está dividido en dos directorios principales correspondientes a los módulos del curso:
## Introducción al Módulo 0
El módulo en el que todavía no se programa
Este módulo no enseña a escribir código, y esa decisión es deliberada.
Lo que hace es dejarte en condiciones de empezar: que sepas qué vas a construir, qué pasa cuando se abre una página, dónde están tus archivos, cómo se maneja la terminal y qué software hace falta. Diez lecciones para llegar a escribir cuatro líneas de HTML.

Puede parecer mucho preámbulo, y es donde más gente abandona un curso de Angular. Casi nunca por el concepto: por un comando lanzado desde la carpeta equivocada, una versión que no coincide o un error cuyo mensaje no dice dónde mirar. Este módulo existe para que esos tres no te paren.

Al final vas a tener una aplicación Angular corriendo en tu computadora, con un texto tuyo en la pantalla, y vas a saber recuperarla cuando algo se rompa.

## Requisitos
Antes de comenzar debes poder:
Abrir un navegador, usar pestañas y escribir una dirección.
Crear carpetas, guardar archivos y encontrarlos después.
Instalar programas en tu computadora.
Eso es todo. No hace falta haber programado nunca, ni haber abierto una terminal, ni saber qué es HTML.
Sí hace falta una cosa práctica: permiso para instalar software en el equipo donde vas a trabajar. Si es de una empresa y está restringido, resuélvelo antes de la unidad 2, porque ahí se para todo.

## Cómo practicar
Todo el curso vive en una sola carpeta, y la creas en la pieza siguiente: el punto de partida la monta contigo y comprueba que estás dentro antes de seguir.

## Quién escribe qué
Tu proyecto solo se toca cuando una práctica te lo pide.
Las lecciones enseñan: te ponen el código delante, te mandan abrir algo y mirarlo, te hacen predecir antes de seguir. Aunque veas un componente entero, está ahí para que lo entiendas — no para que lo copies a tu carpeta.
Lo que construye la aplicación es la Práctica Local, y está siempre en el mismo sitio: al final de cada módulo, después de todas sus unidades y justo antes del examen del módulo. Ahí sí, archivo por archivo, con lo que tienes que ver en pantalla al guardar cada paso.
La excepción es este módulo. En el 0 se instala, se crea el proyecto y se toca el template con las manos, porque no hay otra forma de empezar. La regla empieza a valer en el módulo 1.
Y una costumbre que vale para todo el curso: cuando algo falle, mira antes de tocar. Qué dice el mensaje, en qué ventana salió, desde qué carpeta lo lanzaste. La unidad 3 entera va de eso, y es la habilidad que más veces vas a usar de aquí a la última lección.
Las actividades son locales y autocorregibles. No hay nada que subir.

## Hasta dónde llega
El proyecto que vas a crear genera unos treinta archivos que tú no has escrito, y este módulo no los explica. Se tratan como andamiaje: sabrás cuáles son los cuatro que importan y para qué sirven, y el resto se irá abriendo cuando haya un motivo.
Tampoco se explica el HTML que vas a pegar en el template. Lo reconocerás de la lección del DOM y lo entenderás en el módulo 1, que va justo de eso.
Las versiones están fijadas —Node 24.15.0, npm 11.12.1, Angular CLI 22.1.4— y conviene respetarlas aunque haya más nuevas. No es rigidez: media docena de ejemplos del curso se comportan distinto en otras versiones, y entonces el problema deja de ser el ejemplo y pasa a ser averiguar qué cambió.

curso_angular/
├── panel-actividades/     # Aplicación Angular principal (Módulos 0, 1 y del 3 al 10)
└── fundamentos_ts/        # Ejercicios y teoría de TypeScript a secas (Módulo 2)
