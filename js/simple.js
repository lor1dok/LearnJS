'use strict';

//To String

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof(null + '')); //При сложении со строкой всегда получается строка 

const num = 5;

console.log("vk.com/catalog/" + num);

const fontSize = 26 + 'px';

//To number

// 1)
console.log(typeof(Number('4')));

// 2) Унарный плюс
console.log(typeof(+'5'));
let answ = +prompt("Hello", "");

// 3) 
console.log(typeof(parseInt('15px', 10)));

//To boolean

//Пустота, ничего, отсутствие - всегда ложь
//0, '', null, undefined, NaN;
//' ', пробел уже не является пустотой и будет истиной

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = ' ';

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!"444444")); // Двойное отрицание аннулирует свое же
                                // свое же действие, но работает как  + 
