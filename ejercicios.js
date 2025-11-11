// ===========================================================
// FUNDAMENTOS DE PROGRAMACIÓN - PRÁCTICA FINAL
// Estudiante: Gael
// Fecha: 11/11/2025
// ===========================================================
//
// Este archivo contiene la solución completa de todos los ejercicios
// de la práctica integradora en JavaScript. Cada función está
// documentada siguiendo el formato guía educativa:
//
//  - QUÉ hace la función
//  - CÓMO usarla correctamente
//  - QUÉ parámetros recibe
//  - QUÉ retorna
//  - POR QUÉ se tomaron ciertas decisiones
//
// ===========================================================


// ============================================
// SECCIÓN 1: VARIABLES Y TIPOS DE DATOS
// ============================================

/*
------------------------------------------------------------
FUNCIÓN: miInformacion
------------------------------------------------------------
QUÉ HACE:
  Crea y devuelve un objeto con la información personal del estudiante.

CÓMO USARLA:
  Simplemente se llama sin argumentos: miInformacion()

QUÉ PARÁMETROS RECIBE:
  Ninguno.

QUÉ RETORNA:
  Un objeto con las propiedades: nombre, edad y carrera.

POR QUÉ:
  Se usa para practicar la declaración de variables y el retorno
  de objetos en JavaScript.
*/
function miInformacion() {
  const nombre = "Gael";
  const edad = 19;
  const carrera = "TSU en Desarrollo e Innovación de Software";
  return { nombre, edad, carrera };
}

/*
------------------------------------------------------------
FUNCIÓN: operacionesBasicas
------------------------------------------------------------
QUÉ HACE:
  Calcula las operaciones aritméticas básicas entre dos números.

CÓMO USARLA:
  operacionesBasicas(10, 5)

QUÉ PARÁMETROS RECIBE:
  a: primer número
  b: segundo número

QUÉ RETORNA:
  Un objeto con las propiedades: suma, resta, multiplicacion, division.

POR QUÉ:
  Permite aplicar operadores aritméticos y practicar estructuras básicas
  de retorno de objetos.
*/
function operacionesBasicas(a, b) {
  const suma = a + b;
  const resta = a - b;
  const multiplicacion = a * b;
  const division = b !== 0 ? a / b : null; // Evita división entre cero
  return { suma, resta, multiplicacion, division };
}

/*
------------------------------------------------------------
FUNCIÓN: areaRectangulo
------------------------------------------------------------
QUÉ HACE:
  Calcula el área de un rectángulo.

CÓMO USARLA:
  areaRectangulo(5, 10)

QUÉ PARÁMETROS RECIBE:
  base: base del rectángulo
  altura: altura del rectángulo

QUÉ RETORNA:
  El área (base * altura)

POR QUÉ:
  Reafirma el uso de operadores y funciones simples.
*/
function areaRectangulo(base, altura) {
  return base * altura;
}

/*
------------------------------------------------------------
FUNCIÓN: celsiusAFahrenheit
------------------------------------------------------------
QUÉ HACE:
  Convierte una temperatura de grados Celsius a Fahrenheit.

CÓMO USARLA:
  celsiusAFahrenheit(0) → 32

QUÉ PARÁMETROS RECIBE:
  celsius: número en grados Celsius.

QUÉ RETORNA:
  Temperatura equivalente en Fahrenheit.

POR QUÉ:
  Permite aplicar fórmulas matemáticas básicas en código.
*/
function celsiusAFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}


// ============================================
// SECCIÓN 2: CONDICIONALES
// ============================================

/*
------------------------------------------------------------
FUNCIÓN: parOImpar
------------------------------------------------------------
QUÉ HACE:
  Determina si un número es par o impar.

CÓMO USARLA:
  parOImpar(4) → "par"

QUÉ PARÁMETROS RECIBE:
  numero: entero positivo o negativo.

QUÉ RETORNA:
  "par" o "impar"

POR QUÉ:
  Refuerza el uso del operador módulo (%) y condicionales.
*/
function parOImpar(numero) {
  return numero % 2 === 0 ? "par" : "impar";
}

/*
------------------------------------------------------------
FUNCIÓN: evaluarNota
------------------------------------------------------------
QUÉ HACE:
  Evalúa si una nota numérica es aprobatoria o reprobatoria.

CÓMO USARLA:
  evaluarNota(75) → "Aprobado"

QUÉ PARÁMETROS RECIBE:
  nota: número del 0 al 100

QUÉ RETORNA:
  "Aprobado" o "Reprobado"

POR QUÉ:
  Se usa una estructura if/else para representar decisiones simples.
*/
function evaluarNota(nota) {
  return nota >= 60 ? "Aprobado" : "Reprobado";
}

/*
------------------------------------------------------------
FUNCIÓN: mayorDeTres
------------------------------------------------------------
QUÉ HACE:
  Devuelve el número mayor entre tres valores.

CÓMO USARLA:
  mayorDeTres(5, 9, 3) → 9

QUÉ PARÁMETROS RECIBE:
  a, b, c: tres números.

QUÉ RETORNA:
  El número mayor.

POR QUÉ:
  Practica el uso de Math.max() y comparaciones lógicas.
*/
function mayorDeTres(a, b, c) {
  return Math.max(a, b, c);
}

/*
------------------------------------------------------------
FUNCIÓN: clasificarEdad
------------------------------------------------------------
QUÉ HACE:
  Clasifica una edad en tres categorías: menor, adulto o mayor.

CÓMO USARLA:
  clasificarEdad(20) → "adulto"

QUÉ PARÁMETROS RECIBE:
  edad: número entero.

QUÉ RETORNA:
  "menor", "adulto" o "mayor".

POR QUÉ:
  Refuerza el uso de condicionales múltiples con if/else if/else.
*/
function clasificarEdad(edad) {
  if (edad < 18) return "menor";
  else if (edad <= 64) return "adulto";
  else return "mayor";
}


// ============================================
// SECCIÓN 3: FUNCIONES Y BUCLES
// ============================================

/*
------------------------------------------------------------
FUNCIÓN: factorial
------------------------------------------------------------
QUÉ HACE:
  Calcula el factorial de un número (n! = n * (n-1) * ... * 1)

CÓMO USARLA:
  factorial(5) → 120

QUÉ PARÁMETROS RECIBE:
  n: número entero positivo.

QUÉ RETORNA:
  Factorial del número.

POR QUÉ:
  Practica el uso de bucles y casos base simples.
*/
function factorial(n) {
  if (n === 0) return 1;
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

/*
------------------------------------------------------------
FUNCIÓN: sumaHastaN
------------------------------------------------------------
QUÉ HACE:
  Calcula la suma de todos los números del 1 al n.

CÓMO USARLA:
  sumaHastaN(5) → 15

QUÉ PARÁMETROS RECIBE:
  n: número entero positivo.

QUÉ RETORNA:
  La suma total.

POR QUÉ:
  Refuerza el uso de bucles acumuladores.
*/
function sumaHastaN(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

/*
------------------------------------------------------------
FUNCIÓN: tablaMultiplicar
------------------------------------------------------------
QUÉ HACE:
  Genera la tabla de multiplicar de un número del 1 al 10.

CÓMO USARLA:
  tablaMultiplicar(3) → [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

QUÉ PARÁMETROS RECIBE:
  numero: número entero.

QUÉ RETORNA:
  Un array con los resultados.

POR QUÉ:
  Refuerza el uso de bucles for y arreglos.
*/
function tablaMultiplicar(numero) {
  const tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(numero * i);
  }
  return tabla;
}

/*
------------------------------------------------------------
FUNCIÓN: numerosPares
------------------------------------------------------------
QUÉ HACE:
  Devuelve todos los números pares hasta n.

CÓMO USARLA:
  numerosPares(10) → [2, 4, 6, 8, 10]

QUÉ PARÁMETROS RECIBE:
  n: número entero.

QUÉ RETORNA:
  Array con números pares.

POR QUÉ:
  Refuerza el uso de bucles con incrementos personalizados.
*/
function numerosPares(n) {
  const pares = [];
  for (let i = 2; i <= n; i += 2) {
    pares.push(i);
  }
  return pares;
}


// ============================================
// SECCIÓN 4: ARRAYS
// ============================================

/*
------------------------------------------------------------
FUNCIÓN: sumaArray
------------------------------------------------------------
QUÉ HACE:
  Calcula la suma de todos los elementos de un array numérico.

CÓMO USARLA:
  sumaArray([1, 2, 3]) → 6

QUÉ PARÁMETROS RECIBE:
  numeros: array de números.

QUÉ RETORNA:
  Suma total de los valores.

POR QUÉ:
  Introduce el método .reduce() para operaciones acumulativas.
*/
function sumaArray(numeros) {
  return numeros.reduce((total, n) => total + n, 0);
}

/*
------------------------------------------------------------
FUNCIÓN: promedioArray
------------------------------------------------------------
QUÉ HACE:
  Calcula el promedio de los números dentro de un array.

CÓMO USARLA:
  promedioArray([2, 4, 6]) → 4

QUÉ PARÁMETROS RECIBE:
  numeros: array de números.

QUÉ RETORNA:
  Promedio numérico.

POR QUÉ:
  Refuerza el concepto de promedio como suma / cantidad.
*/
function promedioArray(numeros) {
  if (numeros.length === 0) return 0;
  return sumaArray(numeros) / numeros.length;
}

/*
------------------------------------------------------------
FUNCIÓN: encontrarMaximo
------------------------------------------------------------
QUÉ HACE:
  Encuentra el número más grande dentro de un array.

CÓMO USARLA:
  encontrarMaximo([1, 8, 4]) → 8

QUÉ PARÁMETROS RECIBE:
  numeros: array de números.

QUÉ RETORNA:
  Valor máximo del array.

POR QUÉ:
  Muestra el uso de Math.max y el operador spread (...).
*/
function encontrarMaximo(numeros) {
  return Math.max(...numeros);
}

/*
------------------------------------------------------------
FUNCIÓN: filtrarMayores
------------------------------------------------------------
QUÉ HACE:
  Filtra los números mayores a un valor límite.

CÓMO USARLA:
  filtrarMayores([1, 5, 8, 3], 4) → [5, 8]

QUÉ PARÁMETROS RECIBE:
  numeros: array de números.
  limite: valor mínimo.

QUÉ RETORNA:
  Array con números mayores al límite.

POR QUÉ:
  Practica el método .filter() de los arrays.
*/
function filtrarMayores(numeros, limite) {
  return numeros.filter(num => num > limite);
}

/*
------------------------------------------------------------
FUNCIÓN: invertirArray
------------------------------------------------------------
QUÉ HACE:
  Devuelve un nuevo array con los elementos invertidos.

CÓMO USARLA:
  invertirArray([1, 2, 3]) → [3, 2, 1]

QUÉ PARÁMETROS RECIBE:
  arr: array de cualquier tipo.

QUÉ RETORNA:
  Nuevo array invertido.

POR QUÉ:
  Practica el uso del método .reverse() y el operador spread.
*/
function invertirArray(arr) {
  return [...arr].reverse();
}


// ============================================
// SECCIÓN 5: MATRICES (ARRAYS BIDIMENSIONALES)
// ============================================

/*
------------------------------------------------------------
FUNCIÓN: crearMatriz
------------------------------------------------------------
QUÉ HACE:
  Crea una matriz (array de arrays) llena de ceros.

CÓMO USARLA:
  crearMatriz(2, 3) → [[0,0,0],[0,0,0]]

QUÉ PARÁMETROS RECIBE:
  filas: número de filas.
  columnas: número de columnas.

QUÉ RETORNA:
  Matriz de ceros.

POR QUÉ:
  Introduce el concepto de arrays bidimensionales.
*/
function crearMatriz(filas, columnas) {
  const matriz = [];
  for (let i = 0; i < filas; i++) {
    const fila = new Array(columnas).fill(0);
    matriz.push(fila);
  }
  return matriz;
}

/*
------------------------------------------------------------
FUNCIÓN: sumaMatriz
------------------------------------------------------------
QUÉ HACE:
  Suma todos los elementos de una matriz.

CÓMO USARLA:
  sumaMatriz([[1,2],[3,4]]) → 10

QUÉ PARÁMETROS RECIBE:
  matriz: array bidimensional de números.

QUÉ RETORNA:
  Suma total.

POR QUÉ:
  Refuerza el uso de bucles anidados.
*/
function sumaMatriz(matriz) {
  let suma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      suma += matriz[i][j];
    }
  }
  return suma;
}

/*
------------------------------------------------------------
FUNCIÓN: obtenerFila
------------------------------------------------------------
QUÉ HACE:
  Devuelve una fila específica de la matriz.

CÓMO USARLA:
  obtenerFila([[1,2],[3,4]], 1) → [3,4]

QUÉ PARÁMETROS RECIBE:
  matriz: array bidimensional.
  indiceFila: índice de fila (empezando en 0).

QUÉ RETORNA:
  Array con los valores de la fila seleccionada.

POR QUÉ:
  Permite acceder directamente a una subestructura del array.
*/
function obtenerFila(matriz, indiceFila) {
  return matriz[indiceFila];
}

/*
------------------------------------------------------------
FUNCIÓN: obtenerColumna
------------------------------------------------------------
QUÉ HACE:
  Devuelve todos los valores de una columna específica.

CÓMO USARLA:
  obtenerColumna([[1,2],[3,4],[5,6]], 0) → [1,3,5]

QUÉ PARÁMETROS RECIBE:
  matriz: array bidimensional.
  indiceColumna: índice de columna (empezando en 0).

QUÉ RETORNA:
  Array con los elementos de la columna.

POR QUÉ:
  Enseña a recorrer estructuras bidimensionales.
*/
function obtenerColumna(matriz, indiceColumna) {
  const columna = [];
  for (let i = 0; i < matriz.length; i++) {
    columna.push(matriz[i][indiceColumna]);
  }
  return columna;
}

/*
------------------------------------------------------------
FUNCIÓN: transponer
------------------------------------------------------------
QUÉ HACE:
  Intercambia filas por columnas en una matriz (transpuesta).

CÓMO USARLA:
  transponer([[1,2,3],[4,5,6]]) → [[1,4],[2,5],[3,6]]

QUÉ PARÁMETROS RECIBE:
  matriz: array bidimensional.

QUÉ RETORNA:
  Nueva matriz transpuesta.

POR QUÉ:
  Es una operación fundamental para álgebra y manipulación matricial.
*/
function transponer(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const transpuesta = [];

  for (let j = 0; j < columnas; j++) {
    const nuevaFila = [];
    for (let i = 0; i < filas; i++) {
      nuevaFila.push(matriz[i][j]);
    }
    transpuesta.push(nuevaFila);
  }
  return transpuesta;
}


// ============================================
// NO MODIFIQUES ESTA LÃNEA - NECESARIA PARA LOS TESTS
// ============================================
module.exports = {
  miInformacion,
  operacionesBasicas,
  areaRectangulo,
  celsiusAFahrenheit,
  parOImpar,
  evaluarNota,
  mayorDeTres,
  clasificarEdad,
  factorial,
  sumaHastaN,
  tablaMultiplicar,
  numerosPares,
  sumaArray,
  promedioArray,
  encontrarMaximo,
  filtrarMayores,
  invertirArray,
  crearMatriz,
  sumaMatriz,
  obtenerFila,
  obtenerColumna,
  transponer
};
