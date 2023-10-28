//2. Completar la función getLargerInt la cual recibe dos números enteros. La función debe retornar el número mayor. 

function getLergerInt(number1, number2){ 
    if(number1 == number2){
        console.log("Los numeros ingresados son iguales");
    }
    else if (number1 > number2){
        return number1;
    }
    else{
        return number2;
    }
} 

var number1 = 412;
var number2 = 23;
var Resultado = getLergerInt(number1, number2);
console.log(Resultado);