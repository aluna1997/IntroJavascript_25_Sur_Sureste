const num = 10;
function multiply() {
  const num = 5;
  console.log(num * 2);
}
multiply();
console.log(num);

/* El resultado es 10. Esto sucede porque la variable num 
   definida dentro de la función multiply tiene un scope local, 
   lo que significa que solo existe dentro de la función. Por lo tanto, 
   la función multiply imprime el resultado de la multiplicación de num local 
   (5) por 2, que es 10. Luego, fuera de la función, se imprime el valor de la
   constante num global, que es 10. Como num es una constante, no se puede modificar su valor. */