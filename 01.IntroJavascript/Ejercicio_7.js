function outer() {
    let num = 10;
    function inner() {
      console.log(num);
    }
    return inner;
  }
  
  const innerFunc = outer();
  innerFunc();

/* El resultado es 10. En este código, la función outer devuelve otra función 
   llamada inner, que simplemente imprime el valor de la variable num de la 
   función outer. La variable num se declara con let dentro de la función outer, 
   lo que significa que su ámbito se limita a esa función. Sin embargo, cuando la 
   función inner se devuelve desde la función outer, mantiene una referencia al 
   ámbito de la función outer y puede acceder a la variable num dentro de ella. 
   Finalmente, fuera de la función outer, se llama a la función innerFunc, que imprime 
   el valor de num de la función outer, que es 10. */