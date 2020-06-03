var estudiantes = [15, 20, 16, 21, 10];
var acum = 0;
var mayor = 0;
var menor = 1000;

for (i = 0; i < estudiantes.length; i++) {
  /*  if (estudiantes[i] >= 18) {
    acum += 1;
    console.log(`${estudiantes[i]} es mayor de edad`);
  } */
  if (estudiantes[i] > mayor) {
    mayor = estudiantes[i];
  }
  if (estudiantes[i] < menor) {
    menor = estudiantes[i];
  }
}
console.log("Mayor es: " + mayor);
console.log("Menor es: " + menor);
/* if (acum == 0) {
  console.log(`No hay mayores de edad`);
} else {
  console.log(`${acum} son mayores`);
}
 */
