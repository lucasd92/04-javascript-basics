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

/* Invertir el orden del array (utilizar reverse) */

console.log(monthsArray.reverse());

/* Unir todos los elementos del array en un único string donde cada mes este separado 
por un guión - (utilizar join). */

var monthsString = monthsArray.join('-');

console.log(monthsString);

/* Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice). */

var monthsArray = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
                   "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var newShortMonthsArray = monthsArray.slice(monthsArray.indexOf('Mayo'),
                                            monthsArray.indexOf('Noviembre') + 1);

console.log(newShortMonthsArray);

/* ********************************
*     If Else
* ********************************/

/* Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor
o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje
“Lower than 0,5” */

var randomNumber = Math.random();

if(randomNumber >= 0.5){
    alert('Greater than 0,5');
}
else{
    alert('Lower than 0,5');
}

/* Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
    “Bebe” si la edad es menor a 2 años
    “Nino” si la edad es entre 2 y 12 años
    “Adolecente” si la edad es entre 13 y 19 años
    “Joven” si la edad está entre 20 y 30 años
    “Adulto” entre 31 y 60 años
    “Adulto mayor” entre 61 y 75 años
    “Anciano” si es mayor a 75 años */

var randomAge = Math.round(Math.random() * 100);

if(randomAge < 2){
    alert('Bebe');
}
else if(randomAge < 13){
    alert('Nino');
}
else if(randomAge < 20){
    alert('Adolescente');
}
else if(randomAge < 31){
    alert('Joven');
}
else if(randomAge < 61){
    alert('Adulto');
}
else if(randomAge < 76){
    alert('Adulto mayor');
}
else{
    alert('Anciano');
}

/* ********************************
*     For
* ********************************/

/* Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript
para mostrar una alerta utilizando cada una de las palabras. */

var monthsArray = ["enero", "febrero", "marzo", "abril", "mayo"];

monthsArray.forEach(function(element,index,array){
    alert(element);
});

/* Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por 
cada palabra modificada. */

monthsArray.forEach(function(element,index,array){
    var auxString = element.substring(0,1).toUpperCase() + element.substring(1);
    alert(auxString);
});