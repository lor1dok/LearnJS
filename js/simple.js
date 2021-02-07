'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count > 30) {
    console.log("Да вы киноман");
} else if (personalMovieDB.count > 10) {
    console.log("Вы любитель кино");
} else if (personalMovieDB.count > 0) {
    console.log("Вы новичок");
} else {
    console.log("Произошла какая-то ошибка!")
}

for (let i = 0; i < 2; i++) {
    const lSeenFilm = prompt("Какой последний фильм вы посмотрели?", ''),
          lSeenFilmRate = +prompt("Какую оценку вы ему бы поставили?", '');
    if (lSeenFilm != null && lSeenFilmRate != null && 
        lSeenFilm != '' && lSeenFilmRate != '' && 
        lSeenFilm.length < 51) {
        personalMovieDB.movies[lSeenFilm] = lSeenFilmRate;
    } else {
        console.log('error');
        i--;
    }    
}

console.log(personalMovieDB);