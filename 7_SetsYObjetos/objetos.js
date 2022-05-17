// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

var personales = {
    nombre: "Gonzalo",
    apellido: "Chiaravalle",
    edad: 23,
    altura: 1.70,
    dev: true
}

var edad = personales.edad
console.log(edad)

var lista = [{
    ...personales
},{ nombre: "soul",
apellido: "Classic",
edad: 27,
altura: 1.75,
        dev: true
    }, {
        nombre: "mario",
        apellido: "swans",
        edad: 20,
        altura: 1.90,
        dev: false
    }]

console.log(lista)
    
lista.sort((a, b) => a.edad - b.edad)
console.log(lista)