"use strict";

// Способы вызова функции 4 метода

// 1) Обычная функция: this = window, но при use strict - undefined

// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4, 5);



// 2) Контекст у методов объекта - сам объект

// const obj = {
//     a:20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();

// const obj = {
//     a:20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout(); // Вызов функции уже не относится к самому объекту, 
//                      контекст будет по первоум случаю
//     }
// };
// obj.sum();



// 3) this в коснтрукторах и классах - новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 23);



// 4) Ручная привязка this: call, apply, bind

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smithy']);



// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); // bind Создает новую функцию и вызывает 
// под нее контекст
// console.log(double(3));
// console.log(double(7));

// Реальный пример

const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
//     console.log(this);
// });

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
    console.log(this);
}); 
// У стрелочных функций нет своего контекста поэтому его
// нужно давать

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { //Стрелочная функция берет контекст родителя
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));