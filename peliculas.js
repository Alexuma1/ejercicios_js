//importamos lo necesario

import { valores } from "./problemas.js";

//declaramos las variables



//declaramos las clases

class pelicula {
    constructor(id_IMDB, titulo, director, año_de_estreno, origen, genero, calificacion_IMDB) {
        this.id_IMDB = id_IMDB
        this.titulo = titulo
        this.director = director
        this.año_de_estreno = año_de_estreno
        this.origen = origen
        this.genero = genero
        this.calificacion_IMDB = calificacion_IMDB
    }
}

//realizamos las validaciones

const shrek = ['tt0126029','shrek','Vicky Jenson, Andrew Adamson',2001,paisOPaises=[],]

const validaciones = (pelicula)=>{
    // if(shrek.length!==pelicula.length)console.warn('No ingresaste todos los datos obligatorios'))
    if (typeof pelicula[0] !== 'string') return console.error(`id_IMDB no es un texto, por favor ingresa un dato tipo texto`)
    let id_IMDB =/^[A-Za-zÑñÁÉÍÓÚáéíóúÜü]{2}[0-9]{7}/.test(pelicula[0])
    if(id_IMDB !==true)return console.warn('id_IMDB debe tener 9 caracteres, 2 letras al comienzo y 7 numeros al final')

    if(pelicula[1]==='')return console.warn('No ingresaste un titulo, por favor ingresa uno')
    if(typeof pelicula[1]!== 'string')return console.warn(`Titulo no es un texto, por favor ingresa un dato tipo texto`)
    if(pelicula[1].length>100)return console.error(`${pelicula[1]} no puede ser mayor a 100 caracteres`)

    if(pelicula[2]==='')return console.warn('No ingresaste un director, por favor ingresa uno')
    if(typeof pelicula[2]!== 'string')return console.error(`Director no es un texto, por favor ingresa un dato tipo texto`)
    if(pelicula[2].length>50)return console.error(`${pelicula[2]} no puede ser mayor a 50 caracteres`)

    if(typeof pelicula[3] !== 'number')return console.warn(`${pelicula[3]} no es un numero, por favor ingresa un numero`)
    let anio = /^[0-9]{4}$/.test(pelicula[3])
    if(anio==false)return console.error(`El año ${pelicula[3]} no es un año valido, por favor verifique los datos`)
    if(pelicula[3]<1895)return console.warn('La primera pelicula se estreno en 1895, tu pelicula no puede ser anterior')

    if(!(pelicula.paisOPaises instanceof array))return console.warn('No ingresaste un tipo de dato array')
}
