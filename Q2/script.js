let positivos = function (value){
    return value >= 0;
};

arr = [3, 10, -19, -2, 40, 55]

let arr2 = arr.filter(positivos);

let arr3 = arr2.reduce((a , v) => a + v, 0);

document.write(arr3)