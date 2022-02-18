import { textos } from "./problemas.js";

const esTexto = function (texto) {
    var tipoDato = typeof texto;
    if (tipoDato === "string") {
        console.info('Es un texto');
    }
    else {
        console.warm(`No es un texto es un: ${tipoDato}`);
    }
}
const largoTexto = function (texto) {
    const NumeroCaracteres = texto.length;
    console.log(NumeroCaracteres);
}
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
esTexto(textos.texto01);
esTexto(textos.texto02);
esTexto(textos.texto03);
esTexto(textos.texto04);
largoTexto(textos.texto01);
mostrarCaracteres(textos.texto02);
convertirCaracteres(textos.texto03, " ");
repetidor(textos.texto04, 3);
