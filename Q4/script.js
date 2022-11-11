let arr = [5, 2, 15]

let tam = arr.length;
let soma = arr.reduce((a , v) => a + v, 0);

let resultado = soma/tam;

document.write(resultado)
