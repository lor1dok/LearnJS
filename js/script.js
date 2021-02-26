"use strict";

const persone = {
    name: 'Alex',
    tel: '88005553535',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); // Полное глубокое клонирование объекта

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);