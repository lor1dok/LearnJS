"use strict";

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); //Узнаем колличество классов
// console.log(btns[0].classList.item(0)); //Получаем опред класс по номеру

// console.log(btns[0].classList.add('red', 'green'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //Удаляет, либо добавляет класс вкл\выкл

// if (btns[0].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); //Не юзать, старый способ

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.classList.contains('blue')) {
//         console.log('Hello');
//     }
// }); //Это всё делегирование, с родителя на потомка, новые кнопки тоже заработают

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello2');
//     });
// }); //Событие не добавится на новые элементы

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('blue');
wrapper.append(btn);




