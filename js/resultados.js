import { texto } from "./problemas.js";

let esTexto = function () {
    var tipoDato = typeof texto;
    if (tipoDato === "string") {
        console.log('Es un texto');
        console.log(texto.length);
    }
     else {
            console.log(`No es un texto es un: ${tipoDato}`);
        }
}

esTexto();