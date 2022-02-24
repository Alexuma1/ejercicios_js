//importamos lo necesario

import { valores } from "./problemas.js";

//declaramos las variables

const id_IMDB = 'tt0126029',
    titulo = 'shrek',
    director = 'Vicky Jenson, Andrew Adamson',
    anio = 2001,
    pais = ['Estados Unidos'],
    genero = ['comedia','aventura','animación'],generosAceptados=['Acción','Aventura','Ciencia Ficcción','Comedia','No-Ficción','Drama','Fantasía','Musical','Suspense','terror','animación'],
    calificacion_IMDB=2

//declaramos las clases

class Pelicula {
    constructor(id_IMDB, titulo, director, año_de_estreno, origen, genero, calificacion_IMDB) {
        this.id_IMDB = id_IMDB
        this.titulo = titulo
        this.director = director
        this.año_de_estreno = año_de_estreno
        this.origen = origen
        this.genero = genero
        this.calificacion_IMDB = calificacion_IMDB
    }
    static generosAceptados(){
        for(let i=0;i<=generosAceptados.length;i++)
        {
            console.info(generosAceptados[i])
        }
    }
}
// const shrek=new Pelicula()
// Pelicula.generosAceptados()
//declaracion de metodos



//realizamos las validaciones

const validaciones = (id_IMDB = "", titulo = "", director = "", anio = undefined, pais = "", genero = "",calificacion_IMDB=undefined) => {
    // if(shrek.length!==pelicula.length)console.warn('No ingresaste todos los datos obligatorios'))
    if (typeof id_IMDB !== 'string') return console.error(`id_IMDB no es un texto, por favor ingresa un dato tipo texto`)
    let id_imdb = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü]{2}[0-9]{7}/.test(id_IMDB)
    if (id_imdb !== true) return console.warn('id_IMDB debe tener 9 caracteres, 2 letras al comienzo y 7 numeros al final')

    if (titulo === '') return console.warn('No ingresaste un titulo, por favor ingresa uno')
    if (typeof titulo !== 'string') return console.warn(`Titulo no es un texto, por favor ingresa un dato tipo texto`)
    if (titulo.length > 100) return console.error(`${titulo} no puede ser mayor a 100 caracteres`)

    if (director === '') return console.warn('No ingresaste un director, por favor ingresa uno')
    if (typeof director !== 'string') return console.error(`Director no es un texto, por favor ingresa un dato tipo texto`)
    if (director.length > 50) return console.error(`${director} no puede ser mayor a 50 caracteres`)

    if (typeof anio !== 'number') return console.warn(`${anio} no es un numero, por favor ingresa un numero`)
    let anios = /^[0-9]{4}$/.test(anio)
    if (anios == false) return console.error(`El año ${anio} no es un año valido, por favor verifique los datos`)
    if (anio < 1895) return console.warn('La primera pelicula se estreno en 1895, tu pelicula no puede ser anterior')

    if (!(pais instanceof Array)) return console.warn('No ingresaste un tipo de dato array')
    for (let cadena of pais) {
        if (typeof cadena !== 'string') return console.warn(`${pais} no contiene solo datos de texto, verifica y reintenta`)
    }
    if(pais.length===0)return console.warn('el genero esta vacio, ingresa un genero')

    if (!(genero instanceof Array)) return console.warn('No ingresaste un tipo de dato array')
    for (let cadenas of genero) {
        if (typeof cadenas !== 'string') return console.warn(`${genero} no contiene solo datos de texto, verifica y reintenta`)
    }
    if(genero.length===0)return console.warn('el genero esta vacio, ingresa un genero')

    if (typeof calificacion_IMDB !== 'number') return console.warn(`${calificacion_IMDB} no es un numero, por favor ingresa un numero`)
    if (calificacion_IMDB===0)return console.warn('El numero ingresado no puede ser cero')
    let calificacion = /^([0-9]{1})(\.[0-9]{1})?$/.test(calificacion_IMDB)
    if (calificacion == false) return console.error(`El año ${calificacion_IMDB} no es un una calificacion valida por favor ingresa una valida`)
    console.log(calificacion_IMDB)
}

// llamamos las validaciones

validaciones(id_IMDB, titulo, director, anio, pais, genero,calificacion_IMDB)