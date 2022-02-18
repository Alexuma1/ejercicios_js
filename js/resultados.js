// importando los datos de los problemas para su resolucion

import { valores } from "./problemas.js";


// constantes que comprueban si los datos ingresados son del tipo correcto:

// los datos ingresados son del tipo texto:

const esTexto = (texto="") =>
(typeof texto != "string")
    ?console.warn('No es un texto, por favor ingresa un texto')
    :(!texto)
    ?console.warn('El texto esta vacio')
    :console.info('Es un texto')

// los datos ingresados son del tipo numero:

const esNumero = (numero=undefined) =>
(typeof numero != 'number')
    ?console.warn('No es un numero, por favor ingresa un numero')
    :(numero===0)
    ?console.warn('Ingresa un numero mayor a 0')
    :console.info('Es un numero')

// los datos ingresados son del tipo cadena vacia:
const esEspacio = (texto="") =>
(typeof texto != "string")
    ?console.warn('No es un texto, por favor ingresa un texto')
    :(texto!=' ')
    ?console.warn('No es un espacio por favor ingresa un espacio en blanco')
    :console.info('Es un espacio en blanco')


// realizando las funciones pedidas en los problemas

// const largoTexto = (texto) => console.log(`El numero de caracteres es: ${texto.length} de la palabra ${texto}`);
const mostrarCaracteres = (texto,longitud) => console.log(texto.slice(0,longitud));
// const convertirCaracteres = (texto, separador) => console.log(texto.split(separador));
// const repetidor = (texto, count) => console.log(texto.repeat(count));


// mostrando en consola las resoluciones primero si son textos


// const mostrarEnConsola = (esTexto=true&&esNumero==true) => mostrarCaracteres(valores.texto02,valores.longitud);
esTexto(valores.texto01);
esTexto(valores.texto02);
esTexto(valores.texto03);
esTexto(valores.texto04);

esNumero(valores.longitud);
esEspacio(valores.espacio);
esNumero(valores.contador);
// mostrarEnConsola();

// mostrando en consola las resoluciones segundo las resoluciones a los problemas

largoTexto(valores.texto01);
mostrarCaracteres(valores.texto02,valores.longitud);
convertirCaracteres(valores.texto03,valores.espacio);
repetidor(valores.texto04, valores.contador);
