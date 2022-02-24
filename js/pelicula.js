// Declaramos la clases

class Pelicula {
    constructor({ id, titulo, director, estreno, origen, generos, calificacion }) {
        this.id = id
        this.titulo = titulo
        this.director = director
        this.estreno = estreno
        this.origen = origen
        this.generos = generos
        this.calificacion = calificacion

        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
        this.validarOrigen(origen)
        this.validarGeneros(generos)
        this.validarCalificacion(calificacion)
    }

    // metodos estaticos

    static get listaGeneros() {
        return ['Action', 'Adult', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film Noir', 'Game-Show', 'History', 'Horror', 'Musical', 'Music', 'Mystery', 'News', 'Reality-TV', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Talk-Show', 'Thriller', 'War', 'Western']
    }

    static generosAceptados() {
        return console.info(`Los géneros aceptados son: ${this.listaGeneros.join(", ")}`)
    }

    // validaciones genericas

    validarCadenas(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} ${valor} esta vacío`)
        if (typeof valor !== 'string') return console.error(`${propiedad} "${valor}" ingresado, No es una cadena de texto`)
        return true
    }

    validarLongitudCadena(propiedad, valor, longitud) {
        if (valor.length > longitud) return console.error(`"${propiedad}" exede el número de caracteres permitidos(${longitud}).`)
        return true
    }

    validarNumero(propiedad, valor) {
        if (!valor) return console.warn(`${propiedad} ${valor} esta vacío`)
        if (typeof valor !== 'number') return console.error(`${propiedad} "${valor}"ingresado, No es un numero`)
        return true
    }

    validarArray(propiedad, valor) {
        if (!(valor instanceof Array)) return console.warn(`${propiedad} "${valor}" ingresado, no es un array`)
        if (valor.length === 0) return console.warn(`${propiedad} "${valor}" ingresado, no tiene valores`)
        for (let val of valor) {
            if (typeof val !== 'string') return console.error(`${propiedad} "${valor}" ingresado, No es un dato tipo texto`)
            if (!val) return console.error(`${propiedad} "${valor}" ingresado, Contiene datos vacios, llena todos los datos`)
        }
        return true
    }

    // validaciones mas complejas

    validarIMDB(id) {
        if (this.validarCadenas('IMDB id', id)) {
            if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
                return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas, los 7 restantes números`)
            }
        }
    }

    validarTitulo(titulo) {
        if (this.validarCadenas('Titulo', titulo)) {
            this.validarLongitudCadena('Titulo', titulo, 100)
        }
    }

    validarDirector(director) {
        if (this.validarCadenas('Director', director)) {
            this.validarLongitudCadena('Director', director, 50)
        }
    }

    validarEstreno(estreno) {
        if (this.validarNumero('Año de Estreno', estreno)) {
            if (!(/^([0-9]){4}$/.test(estreno))) {
                return console.error(`Año de Estreno "${estreno}" no es válido, debe tener un año válido`)
            }
        }
    }

    validarOrigen(origen) {
        this.validarArray('Pais de Origen', origen)
    }

    validarGeneros(generos) {
        if (this.validarArray('Generos', generos)) {
            for (let genero of generos) {
                if (!Pelicula.listaGeneros.includes(genero)) {
                    console.error(`Generos(s) incorrectos"${generos.join(", ")}"`)
                    Pelicula.generosAceptados()
                }
            }
        }
    }

    validarCalificacion(calificacion) {
        if (this.validarNumero('Calificacion', calificacion)) {
            return (calificacion < 1 || calificacion > 10)
                ? console.error(`La calificacion tiene que etar entre un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1)
        }
    }
}
// Pelicula.generosAceptados()
const peli = new Pelicula({
    id: 'tt1928374',
    titulo: 'asdasd',
    director: 'sadsad',
    estreno: 5432,
    origen: ['asd asd asd'],
    generos: ['Comedy', 'Adventure'],
    calificacion: 5.2
})