'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');
      

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

const num = 500;
box.style.cssText = `background-color: green; width: ${num}px`;

btns[1].style.borderRadius = '20%';
circles[2].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

document.querySelector('.wrapper').append(div);

wrapper.append(div);
// wrapper.prepend(div);
// wrapper.appendChild(div); //Старый вариант, работает как и append

// hearts[0].before(div);
// hearts[1].after(div);
wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]); //Старый вариант

hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]); //Старый вариант

div.innerHTML ="<h1>Hello World</h1>";

// div.textContent = "<h1>Hello World</h1>"; //Теги уже пихать нельзя

div.insertAdjacentHTML("afterend", `<h2>Hell' o</h2>`);