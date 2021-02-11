'use strict';

let str = 'some';
let str_obj = new String(str);

console.log(typeof(str));
console.log(typeof(str_obj));

console.dir([1,2,3]);

const soldier = {
    health:400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };



// Object.setPrototypeOf(john, soldier); // == john.__proto__ = soldier;

john.sayHello();