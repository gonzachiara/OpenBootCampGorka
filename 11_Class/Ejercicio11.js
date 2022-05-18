// Crea un nuevo fichero JS que contenga las siguientes líneas

// - Una clase llamada "Estudiante" que tenga:

// - Una variable llamada nombre

// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

// - Crea una nueva instancia de "Estudiante"

// - Haz la llamada al método obtenDatos

class Estudiante {
    nombre
    lista
    constructor(nombre, lista) {
        this.nombre = "Gonzalo"
        this.lista = ["Javascript", "HTML", "CSS"]
    }
    obtenDatos() {
        {
            return [this.nombre, this.lista]
        }
    }
}

const nombre = new Estudiante
console.log(nombre)

console.log(nombre.obtenDatos())
