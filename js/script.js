/* Ejercicio 1: Comparar Edad
1. Solicita al usuario que ingrese su edad.
2. Si la edad es mayor o igual a 18, muestra un mensaje que diga "Eres mayor de edad".
3. Si no, muestra "Eres menor de edad". */

/* let edad = prompt("Ingrese su edad: ");
if (edad >= 18) {
  alert("Eres mayor de edad");
} else {
  alert("Eres menor de edad");
} */

/*   Ejercicio 2: Número Positivo o Negativo
1. Solicita al usuario que ingrese un número.
2. Si el número es mayor o igual a 0, muestra "El número es positivo".
3. Si no, muestra "El número es negativo". */

/* let numero = prompt("Ingresa un número: ");

if (numero >= 0) {
  alert("El número " + numero + " es positivo");
} else {
  alert("El número " + numero + " es negativo");
} */

/* Ejercicio 3: Par o Impar
    1. Solicita al usuario que ingrese un número.
    2. Usa el operador módulo (%) para verificar si el número es par o impar.
    3. Muestra por consola "El número es par" o "El número es impar" según el resultado. */

/* let numero = prompt("Ingresa un número: ");

if (numero % 2 == 0) {
  alert("El número " + numero + " es par.");
} else {
  alert("El número " + numero + " es impar.");
}
 */

/* Ejercicio 4: Cálculo de Descuento
1. Solicita al usuario que ingrese el total de una compra.
2. Si el total es mayor a 100, aplica un descuento del 10% y muestra el total con
descuento.
3. Si el total es menor o igual a 100, muestra el total sin descuento. */

/* let totalCompra = parseInt(prompt("Ingresa el total de la compra: "));
const descuento = totalCompra * 0.1;

if (totalCompra > 100) {
  totalCompra = totalCompra - descuento;
  alert("el total de la compra con descuento es: $" + totalCompra);
} else {
  alert(
    "El total de la compra no aplica para el descuento, el valor es: $" +
      totalCompra
  );
}
   */

/* Ejercicio 5: Comparar Dos Números
1. Solicita al usuario que ingrese dos números.
2. Compara ambos números e imprime cuál es mayor o si son iguales.  */

/* let numeroUno = parseInt(prompt("Hola, ingresa un número: "));
let numeroDos = parseInt(prompt("Ingresa un segundo número"));

if (numeroUno > numeroDos) {
  alert("El número " + numeroUno + " es mayor");
} else if (numeroDos > numeroUno) {
  alert("El número " + numeroDos + " es mayor");
} else {
  alert("los dos números son iguales");
} */

/* Ejercicio 6: Clasificación por Edad
  1. Solicita al usuario que ingrese su edad.
  2. Muestra un mensaje basado en la clasificación de edades:
  o Si la edad es menor a 12, muestra "Eres un niño".
  o Si la edad es entre 12 y 17, muestra "Eres un adolescente".
  o Si la edad es entre 18 y 64, muestra "Eres un adulto".
  o Si la edad es mayor o igual a 65, muestra "Eres un adulto mayor".  */

/* let edad = parseInt(prompt("Hola, porfavor ingresa tu edad: "));

if (edad < 12) {
  alert("Eres un niño");
} else if (edad >= 12 && edad <= 17) {
  alert("Eres un adolecente");
} else if (edad >= 18 && edad <= 64) {
  alert("Eres un adulto");
} else {
  alert("Eres un Eres un adulto mayor");
} */

/*   Ejercicio 7: Clasificación de Notas
1. Solicita al usuario que ingrese una nota entre 0 y 100.
2. Muestra una clasificación basada en la nota:
o Si la nota es mayor o igual a 90, muestra "Excelente".
o Si la nota es mayor o igual a 70, muestra "Bueno".
o Si la nota es mayor o igual a 50, muestra "Regular".
o Si la nota es menor a 50, muestra "Insuficiente".  */

/* 
let nota = parseInt(prompt("Hola, ingresa una nota entre 0 y 100: "));

if (nota >= 90) {
    alert("Excelente");
  } else if (nota >= 70) {
    alert("Bueno");
  } else if (nota >= 50) {
    alert("Regular");
  } else {
    alert("Insuficiente");
  } */

/* Ejercicio 8: Elección de Menú
 1. Solicita al usuario que elija una opción de menú: 1 para "Pizza", 2 para "Hamburguesa", 3 para "Tacos". 
 2. Usa un switch para mostrar el plato seleccionado
 3. Si la opción no es válida, muestra "Opción no válida".
 */

/* let eleccionMenu = parseInt(
  prompt(
    "Hola, Elige una opcción del menú:\n 1. Pizza \n 2. Hamburguesa \n 3. Tacos \n"
  )
);

switch (eleccionMenu) {
  case 1:
    alert("Seleccionaste: Pizza");
    break;

  case 2:
    alert("Seleccionaste: Hamburguesa");
    break;

  case 3:
    alert("Seleccionaste: Tacos");
    break;

  default:
    alert("Opción invalida :( ");
} */

/*   Ejercicio 9: Tipo de Triángulo
    1. Solicita al usuario que ingrese los tres lados de un triángulo.
    2. Verifica si el triángulo es equilátero (todos los lados iguales), isósceles (dos
    lados iguales), o escaleno (todos los lados diferentes).
    3. Muestra el tipo de triángulo.
 */

/* let lado1 = parseInt(prompt("Ingresa el primer lado del triángulo:"));
let lado2 = parseInt(prompt("Ingresa el segundo lado del triángulo:"));
let lado3 = parseInt(prompt("Ingresa el tercer lado del triángulo:"));

if (lado1 === lado2 && lado2 === lado3) {
  alert("El triángulo es equilátero (todos los lados son iguales).");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  alert("El triángulo es isósceles (dos lados son iguales).");
} else {
  alert("El triángulo es escaleno (todos los lados son diferentes).");
} */

/* 

Ejercicio 10: Adivinar un Número
1. Solicita al usuario que adivine un número entre 1 y 10.
2. Si el número es correcto, muestra "¡Has acertado!".
3. Si no, muestra "Intenta de nuevo". */

/* let numeroIngresado;
let numeroOculto = 5;
do {
  numeroIngresado = parseInt(prompt("Adivina un número del 1 al 10"));
  if (numeroIngresado == numeroOculto) {
    alert("¡Has acertado!");
  } else {
    prompt("Intenta de nuevo");
  }
} while (numeroIngresado != numeroOculto);
 */



/* 
    Ejercicio 11: Cálculo del Precio Final
Solicita al usuario que ingrese el precio base de un producto.
1. Si el precio es mayor a 500, aplica un descuento del 15%.
2. Si el precio es entre 300 y 500, aplica un descuento del 10%.
3. Si el precio es menor a 300, aplica un descuento del 5%.
4. Muestra el precio final después del descuento. */

/* let precioBase = parseInt(prompt("Ingrese el precio base de un producto: "));

const descuentoDelQuince = precioBase * 0.15;
const descuentoDelDiez = precioBase * 0.10;
const descuentoDelCinco = precioBase * 0.05;

if (precioBase > 500) {
  alert("El precio final con descuento del 15% es: " + (precioBase - descuentoDelQuince));
} else if (precioBase >= 300 && precioBase <= 500) {
  alert("El precio final con descuento del 10% es: " + (precioBase - descuentoDelDiez));
} else if (precioBase < 300) {
  alert("El precio final con descuento del 05% es: " + (precioBase - descuentoDelCinco));
} */


/* Ejercicio 12: Verificar el Año Bisiesto
 Solicita al usuario que ingrese un año.
1.	Usa las siguientes reglas para determinar si el año es bisiesto:

Si el año es divisible por 4 pero no por 100, o es divisible por 400, es bisiesto.

 2. Muestra por consola si el año es bisiesto o no bisiesto. */


  let year = parseInt(prompt("Ingresa un año:"));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert("El año " + year + " es bisiesto.");
} else {
    alert("El año " + year + " no es bisiesto.");
}

