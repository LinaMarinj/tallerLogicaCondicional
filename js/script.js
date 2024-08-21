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

let totalCompra = parseInt(prompt("Ingresa el total de la compra: "));
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
