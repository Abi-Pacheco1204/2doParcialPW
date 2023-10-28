//3.   Completar la función fibonacciSequence la cuál recibe limit, un entero positivo que representa la cantidad 
//de elementos de la serie que queremos. 

function fibonacciSequence(limit) {
    if (limit <= 0) {
      return [];
    } else if (limit === 1) {
      return [1];
    } else if (limit === 2) {
      return [1, 1];
    }
  
    var serie = [1, 1];
    for (var i = 2; i < limit; i++) {
      var numeroSig = serie[i - 1] + serie[i - 2];
      serie.push(numeroSig);
    }
  
    return serie;
  }
  
  var limit = 16;
  var fibonacciSeries = fibonacciSequence(limit);
  console.log("La serie de Fibonacci tiene un limite de: ", +limit);
  console.log(fibonacciSeries);