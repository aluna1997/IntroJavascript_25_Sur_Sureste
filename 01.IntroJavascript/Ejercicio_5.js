const num = 10;
function multiply() {
  const num = 5;
  console.log(num * 2);
  {
    const num = 2;
    console.log(num * 2);
  }
}
multiply();
console.log(num);


/* El resultado es 10 4 10. 
   Esto sucede porque hay tres variables num en este código: 
    - La constante global num con un valor de 10, 
    - La constante local num dentro de la función multiply con un valor de 5
    - La constante local num dentro del bloque interno con un valor de 2.
   La función multiply imprime el resultado de la multiplicación de num local (5) por 2, 
   que es 10. Luego, dentro del bloque interno, se imprime el resultado de la multiplicación 
   de num local (2) por 2, que es 4. Finalmente, fuera de la función, se imprime el valor de 
   la constante global num, que es 10. */