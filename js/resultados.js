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
    if (typeof texto != "string" && typeof separador != "string") console.warn('No es un texto, por favor ingresa un texto')
    if (!texto) console.error('El texto esta vacio')
    if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
    console.info(`El texto a devolver en array es: ${texto} y el separador es: ${separador} y quedaria asi: ${texto.split(separador)}`)
}

const miFuncion04 = (texto = "", numero = undefined) => {
    if (typeof texto != "string") console.warn('No es un texto, por favor ingresa un texto')
    if (!texto) console.error('El texto esta vacio')
    if (typeof numero != 'number') console.warn('No es un numero, por favor ingresa un numero')
    if (numero === 0) console.error('Ingresa un numero mayor a 0')
    if (Math.sign(numero) === -1) console.error('Ingresaste un numero negativo, ingresa un numero positivo')
    for (let i = 1; i <= numero; i++) {
        console.info(`El texto ingresado es: ${texto} y se repitio: ${i} veces`)
    }
}

const miFuncion05 = (texto = "") =>
    (typeof texto != "string")
        ? console.error('No es un texto, por favor ingresa un texto')
        : (!texto)
            ? console.warn('El texto esta vacio')
            : console.info(`El texto ingresado es: ${texto} y su inversion es: ${texto.split("").reverse().join("")}`)


const miFuncion06 = (texto = "", palabraRepetida = "", separador = "") => {
    if (typeof texto != "string" && typeof palabraRepetida != "string" && typeof separador != "string") console.error('No son textos, por favor ingresa solo textos')
    if (!texto && !palabraRepetida) console.warn('El texto esta vacio, debes ingresar textos')
    if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
    const palabrasAContar = texto.split(separador), palabrasRepetida = palabraRepetida.split(separador)
    let r = 0
    for (let i = 0; i <= palabrasAContar.length; i++) {
        if (palabrasAContar[i] === palabrasRepetida[0]) {
            r++
            console.log(`El numero de repeticiones fueron: ${r}`)
        }
    }
}

const miFuncion07 = (texto = "", boolean = false,separador="") => {
    if (typeof texto != "string" && typeof separador != "string") console.error('No es un texto, por favor ingresa un texto')
    if (!texto) console.warn('El texto esta vacio')
    if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
    const invertirTexto = texto.split("").reverse().join("")
    const textoSinInvertir = texto.split(separador)
    const textoInvertido = invertirTexto.split(separador)
    for(let i=0;i<textoSinInvertir.length;i++){
        for(let a=0;a<textoInvertido.length;a++){
            if(textoSinInvertir[i]===textoInvertido[a]){
                console.log(`Hay coincidencia ${textoInvertido[a]} es igual a ${textoSinInvertir[i]}`)
                boolean = true;
            }
        }
    }
    console.info(`Hay palindromos: ${boolean}`)
    return true
}


// llamando a las funciones

// miFuncion01(valores.texto01)
// miFuncion02(valores.texto02, valores.longitud)
// miFuncion03(valores.texto03,valores.separador)
// miFuncion04(valores.texto04,valores.repetidor)
// miFuncion05(valores.texto05)
// miFuncion06(valores.texto06,valores.palabraRepetida,valores.separador)
miFuncion07(valores.texto07, valores.esPalindromo,valores.separador)
