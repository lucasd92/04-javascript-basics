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

/* Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
 Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar 
indexOf). */

var longString = "i'M A lOnG sTrInG";

var firstSpacePosition = longString.indexOf(' ');

console.log('The first space is in position: ' + firstSpacePosition); 

/* Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún 
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras
en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

var longString = "inComprEhenSibIliTies dichloRodifluOromeThaNe";

var spaceIndex = longString.indexOf(' ');

var firstWord = longString.substring(0,1).toUpperCase() +
                longString.substring(1,spaceIndex).toLowerCase();

var secondWord = longString.substring(spaceIndex + 1, spaceIndex + 2).toUpperCase() +
                 longString.substring(spaceIndex + 2).toLowerCase();                

console.log(firstWord + ' ' + secondWord);

/* ********************************
*     Arrays
* ********************************/

/* Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses
5 y 11 (utilizar console.log) */

var monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                   "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(monthsArray[4]);
console.log(monthsArray[10]);

/* Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort). */

console.log(monthsArray.sort());

/* Agregar un elemento al principio y al final del array (utilizar unshift y push). */

monthsArray.unshift('newFirstMonth');
monthsArray.push('newLastMonth');

console.log(monthsArray);

/* Quitar un elemento del principio y del final del array (utilizar shift y pop). */

monthsArray.shift();
monthsArray.pop();

console.log(monthsArray);