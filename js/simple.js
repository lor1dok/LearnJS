'use strict';

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
    console.log(num);
}
//Функция начинает искать данные внутри себя, а потом идет на уровень выше и тд.
//Замыкание функции - все переменные функции включая доступные ей внешние переменные

console.log(num);
showFirstMessage("Hell'o!");
console.log(num);

console.log(calc(2, 3)); //Функции существуют в любом моменте кода

function calc(a, b) {
    return (a + b); //ретурн заканчивает раоту функции
    console.log('Unreacheble'); 
}

console.log(calc(2, 3));

const logger = function() { //Такая функция начинает существовать, только когда до нее доходит код
    console.log("Hell'o!");
};

logger();

const calculate = (a, b) => {
    return a + b;
};