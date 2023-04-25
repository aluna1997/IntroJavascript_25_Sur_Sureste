//* ALGUNOS EJEMPLOS DE CICLOS 

//? EJEMPLO DE UN CICLO WHILE 
    //contador 
        var index = 0; // contador en 0 
        while ( index < 11 ) //0<11, 1<11, 2<11
         {
           console.log("VOY EN EL NÚMERO " + index ) // concatemos un texto con una variable 
             // VOY EN EL NÚMERO 1
             // VOY EN EL NÚMERO 2

            //contador 
            index++
        }

//? EJEMPLO DE TABLAS DE MULTIPLICAR CON CICLO WHILE Y FOR 

// WHILE
   var indexDos = 1
   while (indexDos <= 9 ){
        console.log( indexDos + " * " + 2 + " = " + (indexDos*2))
        indexDos++
   }

//FOR 
  // tabla del 5
  var numero = 5
  for (let i=2; i <= 9; i++) {
    console.log("5 x " + i + " : " + i*numero)
  }


//? CICLO DO - WHILE EJEMPLO DE UNA CONTRASEÑA
  let contraseña = "gatito"
  let input 
    do {
        //PREGUNTAR POR LA CONTRASEÑA
        input = prompt("CONTRASEÑA: ")
    }

    while(input != contraseña) // REPITE SI LA CONTRASEÑA NO ES IGUAL 

    alert ("BIENVENIDO!!")

    //? CICLO DO - WHILE EJEMPLO DE UNA CONTRASEÑA CON 3 INTENTOS
    var password = "patito"
    input = ""
    intentos = 0

    do {
        //MIENTRAS TENGAS INTENTOS PREGUNTA, SI NO LE MANDA ERROR 
        //ESTRUCTURA DE CONTROL 
        if( intentos >= 3 ) {
            throw Error ("ACCESO DENEGADO!!")
        }
        input = prompt ("CONTRASEÑA: ")
        intentos++
    }

    while(input != password)
    alert("BIENVENIDO!!!!")