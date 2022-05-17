// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

var compra = ["arroz", "fideos", "azucar", "pimienta", "tomate"];
console.log(compra)

compra.push("Aceite de girasol")
console.log(compra)

compra.pop()
console.log(compra)

var peliculas = [{
    titulo: "Batman",
    director: "scorsese",
    fecha: new Date(1998, 9, 4)
},
    {  titulo: "spiderman",
    director: "darin",
    fecha: new Date(2010, 4, 20)
},
    {   titulo: "dogwatch",
    director: "elver",
    fecha: new Date(2000, 5, 5)
    }]

var peliculasMayores = peliculas.filter(obj => obj.fecha > new Date(2000, 1, 1))

console.log(peliculasMayores)
    
var peliculasTitulo = peliculas.map(pelicula =>{ pelicula.titulo
    return pelicula.titulo
});
console.log(peliculasTitulo)

var peliculasDirector = peliculas.map(peliculad =>{ peliculad.director
    return peliculad.director
});
console.log(peliculasDirector)

