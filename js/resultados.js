// importando los datos de los problemas para su resolucion

import { valores } from "./problemas.js";


// constantes que comprueban si los datos ingresados son del tipo correcto:

// los datos ingresados son del tipo texto:
// const esTexto = (texto = "") => {
//     if (typeof texto != "string") console.error('No es un texto, por favor ingresa un texto');
//     if (!texto) console.warn('El texto esta vacio');
// }

// Comprobaciones numeros:
// const comprobacionNumero = (valor1 = undefined) =>{
// if (typeof valor1 != 'number') return console.warn(`No ingresaste un numero: ${valor1} , ingresa un numero`)
// if (valor1 === 0) return console.error(`Ingresaste un numero: ${valor1} igual a 0, ingresa un numero mayor`)
// if (Math.sign(valor1)===-1)return console.error(`Ingresaste un numero: ${valor1} nagativo, ingresa un numero positivo`)
// }

// const DobleComprobacionNumero = (valor1 = undefined , valor2 = undefined) =>{
//     if (typeof valor1 != 'number') return console.warn(`No ingresaste un numero: ${valor1} , ingresa un numero`)
//     if (valor1 === 0) return console.error(`Ingresaste un numero: ${valor1} igual a 0, ingresa un numero mayor`)
//     if (Math.sign(valor1)===-1)return console.error(`Ingresaste un numero: ${valor1} nagativo, ingresa un numero positivo`)
//     if (typeof valor2 != 'number') return console.warn(`No ingresaste un numero: ${valor2} , ingresa un numero`)
//     if (valor2 === 0) return console.error(`Ingresaste un numero: ${valor2} igual a 0, ingresa un numero mayor`)
//     if (Math.sign(valor2)===-1)return console.error(`Ingresaste un numero: ${valor2} nagativo, ingresa un numero positivo`)
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
    if (typeof texto != "string" || typeof separador != "string") console.warn('No es un texto, por favor ingresa un texto')
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
    if (typeof texto != "string" || typeof palabraRepetida != "string" || typeof separador != "string") console.error('No son textos, por favor ingresa solo textos')
    if (!texto || !palabraRepetida) console.warn('El texto esta vacio, debes ingresar textos')
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

const miFuncion07 = (texto = "", boolean = false, separador = "") => {
    if (typeof texto != "string" || typeof separador != "string") console.error('No es un texto, por favor ingresa un texto')
    if (typeof boolean != "boolean") console.warn('debes ingresar un tipo de dato booleano')
    if (!texto) console.warn('El texto esta vacio')
    if (separador != ' ') console.warn('Ingresa el separador valido para esta operacion, " "')
    texto = texto.toLowerCase()
    const invertirTexto = texto.split("").reverse().join("")
    const textoSinInvertir = texto.split(separador)
    const textoInvertido = invertirTexto.split(separador)
    for (let i = 0; i < textoSinInvertir.length; i++) {
        for (let a = 0; a < textoInvertido.length; a++) {
            if (textoSinInvertir[i] === textoInvertido[a]) {
                console.log(`Hay coincidencia ${textoInvertido[a]} es igual a ${textoSinInvertir[i]}`)
                boolean = true;
            }
        }
    }
    console.info(`Hay palindromos: ${boolean}`)
    return true
}

const miFuncion08 = (texto = "", patron = "") => {
    if (typeof texto != "string" || typeof patron != "string") console.error('No es un texto, por favor ingresa un texto')
    if (!texto || !patron) console.warm('El texto esta vacio')
    const textoACambiar = /xyz/gi
    console.log(`La frase que queremos cambiar es: ${texto} eliminando el patron: ${patron} y quedaria asi ${texto.replace(textoACambiar, "")}`)
}

const miFuncion09 = (min = undefined, max = undefined) => {
    if (typeof min != 'number') return console.warn(`No ingresaste un numero: ${min} , ingresa un numero`)
    if (min === 0) return console.error(`Ingresaste un numero: ${min} igual a 0, ingresa un numero mayor`)
    if (Math.sign(min) === -1) return console.error(`Ingresaste un numero: ${min} nagativo, ingresa un numero positivo`)
    if (typeof max != 'number') return console.warn(`No ingresaste un numero: ${max} , ingresa un numero`)
    if (max === 0) return console.error(`Ingresaste un numero: ${max} igual a 0, ingresa un numero mayor`)
    if (Math.sign(max) === -1) return console.error(`Ingresaste un numero: ${min} nagativo, ingresa un numero positivo`)
    let aleatorio = Math.floor(Math.random() * (max - min)) + min;
    console.log(aleatorio)
}

const miFuncion10 = (numero = undefined) => {
    if (typeof numero != 'number') return console.warn(`No ingresaste un numero: ${numero} , ingresa un numero`)
    if (numero === 0) return console.error(`Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`)
    if (Math.sign(numero) === -1) return console.error(`Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`)
    numero = numero.toString()
    const numeroInvertido = numero.split("").reverse().join("")
    if (numero === numeroInvertido) console.info(`El numero ${numero} es igual a el numero ${numeroInvertido} es capicua`)
    else {
        console.info(`El numero ${numero} no es igual a el numero ${numeroInvertido} no son capicua`)
    }
}

const miFuncion11 = (numero = undefined) => {
    if (typeof numero != 'number') return console.warn(`No ingresaste un numero: ${numero} , ingresa un numero`)
    if (numero === 0) return console.error(`Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`)
    if (Math.sign(numero) === -1) return console.error(`Ingresaste un numero: ${numero} nagativo, ingresa un numero positivo`)
    let factorial = 1
    let numeroFactorial = numero
    do {
        numeroFactorial = numeroFactorial * factorial;
        factorial++;
    } while (numero > factorial)
    console.info(`El numero factorial de ${numero} es: ${numeroFactorial}`)
}

const miFuncion12 = (numero) => {
    if (typeof numero != 'number') return console.warn(`No ingresaste un numero: ${numero} , ingresa un numero`)
    if (numero === 0) return console.error(`Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`)
    let coincidencias = false
    if (Math.sign(numero) === -1) {
        for (let i = 0; i > numero; i--) {
            if (numero % i === 0) {
                coincidencias=true
                break
            }
        }
        if (coincidencias > 1) console.log(`El numero ${numero} No es un numero Primo`)
        else console.log(`El numero ${numero} es un numero Primo`)
    }
    if (Math.sign(numero) != -1) {
        for (let i = 0; i < numero; i++) {
            if (numero % i === 0) {
                coincidencias=true
                break
            }
        }
        if (coincidencias > 1) console.log(`El numero ${numero} No es un numero Primo`)
        else console.log(`El numero ${numero} es un numero Primo`)
    }
}

const miFuncion13 = (numero=undefined)=>{
    if (typeof numero != 'number') return console.warn(`No ingresaste un numero: ${numero} , ingresa un numero`)
    if (numero === 0) return console.error(`Ingresaste un numero: ${numero} igual a 0, ingresa un numero mayor`)
    if (numero % 2 === 0)console.log('es par')
    else console.log('es impar')
}

const miFuncion14 = (numero=undefined,texto='')=>{
    if (typeof texto != "string") console.error('No es un texto, por favor ingresa un texto');
    if (!texto) console.warn('El texto esta vacio');
    if (typeof numero != 'number') return console.warn(`No ingresaste un numero: ${numero} , ingresa un numero`)
    const fahrenheit = (numero*9/5)+32
    const celsius = (numero - 32)*5/9
    texto = texto.toUpperCase()
    if(texto==='°C')console.log(fahrenheit+' °F')
    else console.log(celsius+' °C')
}
// llamando a las funciones

// miFuncion01(valores.texto01)
// miFuncion02(valores.texto02, valores.longitud)
// miFuncion03(valores.texto03,valores.separador)
// miFuncion04(valores.texto04,valores.repetidor)
// miFuncion05(valores.texto05)
// miFuncion06(valores.texto06,valores.palabraRepetida,valores.separador)
// miFuncion07(valores.texto07, valores.esPalindromo,valores.separador)
// miFuncion08(valores.texto08, valores.patron)
// miFuncion09(valores.minimo,valores.maximo)
// miFuncion10(valores.numero)
// miFuncion11(valores.numeroFactorial)
// miFuncion12(valores.numeroPrimo)
// miFuncion13(valores.numeroParImpar)
miFuncion14(valores.grados,valores.medida)
