
let nome = prompt("Digite seu nome")

let arr = nome.split(" ");

let abreviar = arr.reduce((acc, v) => acc + v[0], "");

document.write(abreviar)