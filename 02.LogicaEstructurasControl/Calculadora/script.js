function calcula(cadenaOperacion) {
    const operadoresValidos = ["+", "-", "*", "/"]; // Lista de operadores válidos
    let operador = "";
    let numeros = [];
    let resultado = 0;

    for (let i in cadenaOperacion){
        simboloActual = cadenaOperacion[i]
        if (operadoresValidos.includes(simboloActual)){
            operador = simboloActual
        }
    }

    numeros = cadenaOperacion.split(operador)
    
    if (operador === '+'){
        resultado = parseInt(numeros[0]) + parseInt(numeros[1])
    } else if (operador === '-'){
        resultado = parseInt(numeros[0]) - parseInt(numeros[1])
    } else if (operador === '*'){
        resultado = parseInt(numeros[0]) * parseInt(numeros[1])
    } else if (operador === '/'){
        resultado = parseInt(numeros[0]) / parseInt(numeros[1])
    } 

    return resultado

}
  