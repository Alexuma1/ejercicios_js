class Pelicula{
    constructor({id, titulo, director, estreno, origen, genero, calificacion}) {
        this.id = id
        this.titulo = titulo
        this.director = director
        this.estreno = estreno
        this.origen = origen
        this.genero = genero
        this.calificacion = calificacion

        this.validarIMDB(id)
    }

    validarCadenas(propiedad,valor){
        if(!valor)return console.warn(`${propiedad} ${valor} esta vacío`)
        if(typeof valor !=='string') return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)
        return true
    }

    validarLongitudCadena(propiedad,valor,longitud){
        if(valor.length>longitud)return console.error(`"${propiedad}" exede el número de caracteres permitidos(${longitud}).`)
        return true
    }

    validarIMDB (id){
       if( this.validarCadenas('IMDB id',id)){
           if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
               return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)
           }
       }
    }

}
const peli = new Pelicula({id:'tt1928374'})