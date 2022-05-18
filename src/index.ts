/**
  • Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:

Sueldo Actual   Sueldo con Aumento
0 - 15.000 -->      $ 20%
15.001 - 20.000 --> $ 10%
20.001 - 25.000 --> $ 5%
Más de 25.000 --> $ No hay aumento
• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre
 */
let sueldoActual: number = Number(prompt("Ingrese el sueldo actual: "));
let porcentajeAumento: number = 0;

if (sueldoActual >= 0 && sueldoActual <= 15000) {
  porcentajeAumento = 0.2;
  console.log("El porcentaje de su aumento es del 20%");
} else if (sueldoActual >= 15001 && sueldoActual <= 20000) {
  porcentajeAumento = 0.1;
  console.log("El porcentaje de su aumento es del 10%");
} else if (sueldoActual >= 20001 && sueldoActual <= 25000) {
  porcentajeAumento = 0.05;
  console.log("El porcentaje de su aumento es del 5%");
} else if (sueldoActual >= 25001) {
  porcentajeAumento = 0;
  console.log("Su sueldo actual no tiene aumento");
}
if (porcentajeAumento > 0) {
  console.log("El importe de su aumento es: $",sueldoActual * porcentajeAumento);
  sueldoActual += sueldoActual * porcentajeAumento;
  console.log("Su sueldo actualizado es: $",sueldoActual);
}
