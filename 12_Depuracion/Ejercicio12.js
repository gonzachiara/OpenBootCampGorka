function suma(n) {
    let a = 0;
    let b = 1;
    let resultado = []
 for (let i = 1; i <= n; i++){
       let c = a + b;
        a = b;
        b = c;
        resultado.push(c)
    }
    return resultado;
}
console.log(suma(10);)


