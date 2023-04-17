let num = 10;
function multiply() {
  num = 5;
  console.log(num * 2);
}
multiply();
console.log(num);

/* El resultado es 10. Esto sucede porque la variable num definida dentro 
   de la función multiply no tiene la palabra clave let ni const, lo que 
   significa que no tiene un scope local y está accediendo a la variable 
   num global. Por lo tanto, la función multiply modifica el valor de la 
   variable num global a 5 y luego imprime el resultado de la multiplicación 
   de num global (5) por 2, que es 10. Luego, fuera de la función, se imprime 
   el valor de la variable num global, que es 10. */