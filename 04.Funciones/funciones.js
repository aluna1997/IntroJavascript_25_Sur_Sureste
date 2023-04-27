//* COCINANDO FUNCIONES 
//? MANTRA DE FUNCIONES
   // 1) DECLARAR NUESTRA FUNCION
   // 2) INVOCAR NUESTRA FUNCION

   //* EJEMPLO 1) HACER UNA FUNCION QUE PIDA 2 PARAMETROS Y TE DE COMO RESULTADO LA SUMA DE AMBOS

   function Sumar(x,y){
    //? AQUÍ VA TODA NUESTRA LOGICA
        let suma = x + y
        console.log(`🚀 La suma es: ${suma}`)
   }
   Sumar(3,2)

   //* EJEMPLO 2) HACER UNA FUNCION QUE PIDA 1 PARAMETRO Y NOS DE COMO RESULTADO
   //* LA TABLA DE MULTIPLICAR DE UN NUMERO 
   
   function Multiplicar(a){
        for(let i=2; i<10; i++){
            console.log(a + " * " + i + " : " + i*a)
        }
   }
   Multiplicar(2)

   //* EJEMPLO 3) HACER UNA FUNCION QUE PIDA A UN USUARIO SU EDAD 
  //* Y SABER SI ES MAYOR O MENOR DE EDAD

   function getAge(){
      var edad = window.prompt ("¿Cuantos años tienes?")
        if(edad < 18 ){
            console.log("ERES MENOR DE EDAD")
        } else if (edad >= 18 ){
            console.log("ERES MAYOR DE EDAD")
        } else {
            console.log("EDAD NO VALIDA 🤯")
        }
   } 
   getAge()

