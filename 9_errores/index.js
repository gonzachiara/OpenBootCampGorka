 const logger = require('./logger')

// // logger.log("HOLA")
// logger.info("esto es un mensaje informativo")
// logger.debug("mensaje debug")
// logger.warn("mensaje de advertencia")
// logger.error("esto es un error")

const miFuncion = val => {
    if (typeof val === numer) {
        return 2 * val
    }
    throw new Error("El valor tiene que ser un number")
}

try {
    miFuncion("asd")
    console.log("Esta ejecutando de forma correcta")
  
} catch (e) {
    console.log("ERROR!!!!!")
}