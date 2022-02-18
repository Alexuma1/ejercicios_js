// importando los datos de los problemas para su resolucion

import { textos } from "./problemas.js";


// comprobando si son textos los datos ingresados

const esTexto = (texto="") =>
(typeof texto != "string")
    ?console.warn('No es un texto')
    :(!texto)
    ?console.warn('El texto esta vacio')
    :console.info('Es un texto')

// realizando las funciones pedidas en los problemas
// problema 01
const largoTexto = (texto) => console.log(`El numero de caracteres es: ${texto.length} de la palabra ${texto}`);
// problema 02
const mostrarCaracteres = function (texto) {
    const palabraCortada = texto.substr(0, 5);
    console.log(palabraCortada);
}
const convertirCaracteres = function (texto, separador) {
    const arrayTextos = texto.split(separador);
    console.log(arrayTextos);
}
const repetidor = function (texto, count) {
    const repetidorTexto = texto.repeat(count);
    console.log(repetidorTexto);
}

// mostrando en consola las resoluciones primero si son textos

esTexto(textos.texto01);
esTexto(textos.texto02);
esTexto(textos.texto03);
esTexto(textos.texto04);

// mostrando en consola las resoluciones segundo las resoluciones a los problemas

largoTexto(textos.texto01);
mostrarCaracteres(textos.texto02);
convertirCaracteres(textos.texto03, " ");
repetidor(textos.texto04, 3);
