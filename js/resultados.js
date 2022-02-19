// importando los datos de los problemas para su resolucion

import { valores } from "./problemas.js";


// constantes que comprueban si los datos ingresados son del tipo correcto:

// los datos ingresados son del tipo texto:
// const esTexto = (texto = "") => {
//     if (typeof texto != "string") console.error('No es un texto, por favor ingresa un texto');
//     if (!texto) console.warn('El texto esta vacio');
// }


// los datos ingresados son del tipo numero:
// const esNumero = (numero = undefined) =>{
//     if (typeof numero != 'number') console.warn('No es un numero, por favor ingresa un numero')
//     if (numero === 0) console.error('Ingresa un numero mayor a 0')
//     if (Math.sign(numero)===-1) console.error('Ingresaste un numero negativo, ingresa un numero positivo')
// }

// los datos ingresados son los del separador indicado:
// const esSeparador = (separador = "") =>{
//     if (typeof separador != "string") console.warn('No es el separador que se esperaba, el esperado es tipo " "')
//     if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
// }


// realizando las funciones pedidas en los problemas

const miFuncion01 = (texto = "") =>
    (typeof texto != "string")
        ? console.error('No es un texto, por favor ingresa un texto')
        : (!texto)
            ? console.warn('El texto esta vacio')
            : console.info(`El texto ingresado es: ${texto} y tiene: ${texto.length} caracteres`)

const miFuncion02 = (texto = "", numero = undefined) => {
    if (typeof texto != "string") console.warn('No es un texto, por favor ingresa un texto')
    if (!texto) console.error('El texto esta vacio')
    if (typeof numero != 'number') console.warn('No es un numero, por favor ingresa un numero')
    if (numero === 0) console.error('Ingresa un numero mayor a 0')
    if (Math.sign(numero) === -1) console.error('Ingresaste un numero negativo, ingresa un numero positivo')
    console.info(`El texto a cortar es: ${texto} y la cantidad cortada es: ${numero} y quedaria asi: ${texto.slice(0, numero)}`)
}

const miFuncion03 = (texto = "", separador = "") => {
    if (typeof texto != "string") console.warn('No es un texto, por favor ingresa un texto')
    if (!texto) console.error('El texto esta vacio')
    if (typeof separador != "string") console.warn('No es el separador que se esperaba, el esperado es tipo " "')
    if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
    console.info(`El texto a devolver en array es: ${texto} y el separador es: ${separador} y quedaria asi: ${texto.split(separador)}`)
}

const miFuncion04 = (texto = "", numero = undefined) => {
    if (typeof texto != "string") console.warn('No es un texto, por favor ingresa un texto')
    if (!texto) console.error('El texto esta vacio')
    if (typeof numero != 'number') console.warn('No es un numero, por favor ingresa un numero')
    if (numero === 0) console.error('Ingresa un numero mayor a 0')
    if (Math.sign(numero) === -1) console.error('Ingresaste un numero negativo, ingresa un numero positivo')
    for(let i=1;i<=numero;i++){
        console.info(`El texto ingresado es: ${texto} y se repitio: ${i} veces`)
    }
}
// llamando a las funciones

miFuncion01(valores.texto01)
miFuncion02(valores.texto02, valores.longitud)
miFuncion03(valores.texto03,valores.separador)
miFuncion04(valores.texto04,valores.repetidor)
