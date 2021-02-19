"use strict";

const now = new Date();

//SETTERS
console.log(now.setHours(18));
console.log(now);

//GETTERS
// console.log(now.getMonth()); //Месяцы идут с нуля
// console.log(now.getDay()); //День НЕДЕЛИ воскресенье - 0

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

const start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикол отработал за ${end - start} мс`);