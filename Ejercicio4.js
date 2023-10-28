//4.   Completar la función calculateAverage la cual recibe numbers, un arreglo de n cantidad de enteros. 
//La función debe retornar el promedio de todos los enteros que tenga numbers.

var numbers = [12, 29, 7, 375, 98, 0, 10, 523];

function calculateAverage(numbers) { 
   var average = 0, suma = 0;

   if (numbers === 0){
       return 0;
   }
   
   for(var i = 0; i < numbers.length; i++){
       suma += numbers[i];
   }
   average = suma / numbers.length;
   return average;
 } 

 console.log("El arreglo es: ["+numbers +"]");
 console.log("Y el promedio del arreglo es:");
 console.log(calculateAverage (numbers));