'use strict';

const arr = [1, 13, 14, 32, 2, 23, 26, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop();
// arr.push(10);

// console.log(arr);

// for(let value of arr) {
//     console.log(value);
// } //lenght = last_index + 1

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join(';'));