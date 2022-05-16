// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga tu altura en centímetros (entero)

// - Una variable que contenga tu altura en metros (número de coma flotante)

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)

// - Una variable que contenga tu altura en metros redondeada hacia arriba

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo

// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
var altura = 1.68
var peso = 67

var alturaEntero = parseInt(altura)
console.log(alturaEntero)

var alturaFloat = parseFloat(altura)
console.log(alturaFloat)

var pesoFloat = parseFloat(peso)
console.log(pesoFloat)

var alturaArriba = altura.toFixed()
console.log(alturaArriba)

var alturaAbajo = Math.floor(altura)
console.log(alturaAbajo)

const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
