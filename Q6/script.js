let num = prompt("Digite um número")
let arr = new Array(num);

for( i = 1; i<= num; i++){
        arr[i] = i;
}

arr.shift();
let arr2 = arr.reduce((acc, v) => acc * v, 1);

document.write(arr2)