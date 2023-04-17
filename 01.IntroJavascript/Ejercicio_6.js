let num = 10;
function multiply() {
  let num = 5;
  console.log(num * 2);
  {
    let num = 2;
    console.log(num * 2);
  }
}
multiply();
console.log(num);

/* El resultado es: 10 4 10. Aunque este código es similar al ejemplo anterior, 
   la diferencia es que se utilizan variables let en lugar de constantes const. 
   La variable num global se declara con let, por lo que su ámbito es el archivo completo, 
   pero dentro de la función multiply y dentro del bloque interno, se declaran variables 
   num locales con la palabra clave let. Esto significa que cada variable num es independiente 
   y no afecta el valor de las otras variables num. */