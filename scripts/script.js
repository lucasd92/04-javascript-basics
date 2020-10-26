/* ********************************
*     Variables y Operadores
* ********************************/

/* Crear dos variables numéricas y utilizar el operador suma para
 guardar el valor de la suma de ambos números en una 3er variable. */

 var firstNumber = 4;
 var secondNumber = 3;

 var result = firstNumber + secondNumber;

 console.log(firstNumber + '+' + secondNumber + '=' + result);

 /* Crear dos variables de tipo String y concatenarlas guardando el 
 resultado en una 3er variable. */

 var firstString = 'Hello';
 var secondString = 'World';

 var result = firstString + secondString;
 console.log(firstString + '+' + secondString + '=' + result);

/*  Crear dos variables de tipo String y sumar el largo de cada variable 
(cantidad de letras del string) guardando el resultado la suma una 3er variable 
(utilizar length). */

var firstString = 'Hello';
var secondString = 'World';

var result = firstString.length + secondString.length;
console.log('length of ' + firstString + '+' +'length of ' + secondString + '=' + result);