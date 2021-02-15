const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }; //Опять же почти не используется

// btn.onclick = function() {
//     alert('Second Click');
// }; //Повторение заменяет предыдущее
//     //Нельзя удалить событие после назначение

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second Click');
// }); //Можно назначать несколько действий на одно событие
//     //События в жабскрипт выполняются по очереди

// btn.addEventListener('mouseenter', (e) => {
//     console.log('Hover');
//     console.log(e.target);
//     e.target.remove();
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // } //Можно заменить третьим аргументом опции, к примеру once, которое заменить функцию выше.
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
//Всплытие по иерархии, сначала отработает внутренний, а затем внешний элемент

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    event.preventDefault(); //Отмена стандартного поведения браузера
    
    console.log(event.target);
});


