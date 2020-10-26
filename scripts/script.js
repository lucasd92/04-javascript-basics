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

/* ********************************
*     Strings
* ********************************/

/* Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase). */

var lowerCaseString = "i'm a string";

console.log(lowerCaseString.toUpperCase());

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con los primeros 5 caracteres guardando el resultado en una nueva variable
(utilizar substring). */

var longString = "i'm a long string";

var shortString = longString.substring(0,5);

console.log(shortString);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable 
(utilizar substring). */

var longString = "i'm a long string";

var shortString = longString.substring((longString.length-3));

console.log(shortString);

/* Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo 
string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado
en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */

var longString = "i'M A lOnG sTrInG";

var newString = longString.substring(0,1).toUpperCase() + longString.substring(1).toLowerCase();

console.log(newString);    