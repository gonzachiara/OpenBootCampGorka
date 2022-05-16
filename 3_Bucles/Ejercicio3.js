// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
/*
for (i = 0; i < 10; i++) {
    console.log(10*i)
}
MAL
let factorial = 1
for (let i = 10; i > 0; i--) {
    factorial *= i
}
*/
// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
/*
let i = 0;
let max = 10;
while (i<max) {
    console.log(i*10)
    i++;
}
MAL
   
let factorial = 1
let num = 10
while (num > 1) {
    factorial *= num
    num--
}
console.log(factorial) // Factorial de 10 = 3628800
console.log(factorial) // Factorial de 10 = 3628800
*/
// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial = 1
let num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial) // Factorial de 10 = 3628800

