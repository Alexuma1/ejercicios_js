// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const texto01 = 'hola mundo';

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const texto02 = 'hola mundo';
const longitud = 6;

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const texto03 = 'hola que tal como estas tu';
const separador = ' ';

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const texto04 = 'hola bro';
const repetidor = 3;


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const texto05 = "alejandro";

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const texto06 = "hola mundo adios mundo"
const palabraRepetida = "mundo"

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const texto07 = "salas operando casa cosa ufa bob"
let esPalindromo = false

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const texto08 = "xyz1 xyz2 xyz3 xyz4 xyz5 xyz6 xyz7 xyz8 xyz"
const patron = "xyz"

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const minimo = 501;
const maximo = 601;

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const numero = 505;

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const numeroFactorial = 5;

// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

 const numeroPrimo = 13;

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

// exportando los textos que eh ingresado, para resolverlos.

export const valores ={
    texto01,texto02,texto03,texto04,longitud,separador,repetidor,texto05,texto06,palabraRepetida,texto07,esPalindromo,texto08,patron,minimo,maximo,numero,numeroFactorial,numeroPrimo
}