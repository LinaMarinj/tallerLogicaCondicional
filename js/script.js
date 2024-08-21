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


let nota = parseInt(prompt("Hola, ingresa una nota entre 0 y 100: "));

if (nota >= 90) {
    alert("Excelente");
  } else if (nota >= 70) {
    alert("Bueno");
  } else if (nota >= 50) {
    alert("Regular");
  } else {
    alert("Insuficiente");
  }
