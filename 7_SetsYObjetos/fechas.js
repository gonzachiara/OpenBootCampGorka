// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

var hoy = new Date()
console.log(hoy)

var nacimiento = new Date(1998, 8, 04)
console.log(nacimiento)

console.log(new Date > nacimiento)

console.log(nacimiento.getDate());

console.log(nacimiento.getMonth() + 1)

console.log(nacimiento.getFullYear())