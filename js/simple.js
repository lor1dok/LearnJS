"use strict";

console.log('arr' + " - object");
console.log(4 + +"6"); //+ перед числом зовется унарным

let incr = 10,
    decr = 10;

++incr; //Оператор инкремента префиксная
decr--; //Декремента постфиксная

console.log(incr + '  ' + decr);

console.log(incr++ + '  ' + decr--); //Сначала выводит, а потом применяет оператор
console.log(++incr + '  ' + --decr); //Сначала оператор, потом выводит

console.log(5%2);

console.log(2*4 == '8'); //Сравниваем только по значению выходит true
console.log(2*4 === '8'); //Сравниваем еще и по типу получаем false

console.log(2 === 2 && 3 === 4);
console.log(2 === 2 || 3 === 4);


