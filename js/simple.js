'use strict';

if (4 == 9) { //1 = true
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log("unOk!"); //Тернарный оператор ? вместо if, : вместо else
//Зовется тернарным, тк принимает три аргумента, условие, действие для true, действие для false
const num = 5230;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 50:
        console.log('Верно');
        break;
    default: //Выбирается, если ничего не подошло
        console.log('Не в этот раз');
        break;
}

