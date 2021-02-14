/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Ярость",
        "Новый пират"
    ]
};

const adBlock = document.getElementsByClassName('promo__adv'),
      promoBg = document.querySelector('.promo__bg'),
      genre = promoBg.querySelector('.promo__genre'),
      promoItems = document.getElementsByClassName('promo__interactive-item'),

      movieList = document.querySelector('.promo__interactive-list');

adBlock[0].remove();

genre.textContent = 'ДРАМА';

promoBg.style.backgroundImage = 'url(../img/bg.jpg)';

// dynamicFilms(movieDB, promoItems); //Мой вариант

function dynamicFilms (films, htmlContainer) {
    films.movies.sort();
    for (let i = 0; i < htmlContainer.length; i++) {
        htmlContainer[i].textContent = `${i + 1} - ` + films.movies[i];
        console.log(htmlContainer[`${i}`]);
    }
}

movieList.innerHTML = '';

movieDB.movies.sort();
const liClass = 'promo__interactive-item';

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class=promo__interactive-item>
        ${i + 1} ${film}
        <div class="delete"></div>
    </li>`;
});


