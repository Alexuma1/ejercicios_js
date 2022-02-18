import { textos } from "./problemas.js";

const esTexto = function (texto) {
    var tipoDato = typeof texto;
    if (tipoDato === "string") {
        console.log('Es un texto');
    }
     else {
            console.log(`No es un texto es un: ${tipoDato}`);
        }
}
const largoTexto = function (texto){
    const NumeroCaracteres = texto.length;
    console.log(NumeroCaracteres);
}
const mostrarCaracteres = function (texto){
    const palabraCortada = texto.substr(0,5);
    console.log(palabraCortada);
}
esTexto(textos.texto01);
esTexto(textos.texto02);
largoTexto(textos.texto01);
mostrarCaracteres(textos.texto02)
