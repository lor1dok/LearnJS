/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

// Код возьмите из предыдущего домашнего задания

'use strict';

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null ||
               isNaN(personalMovieDB.count)) {
                   personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function () {
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
    },

    detectPersonaLevel: function() {
        if (personalMovieDB.count > 30) {
            console.log("Да вы киноман");
        } else if (personalMovieDB.count > 10) {
            console.log("Вы любитель кино");
        } else if (personalMovieDB.count > 0) {
            console.log("Вы новичок");
        } else {
            console.log("Произошла какая-то ошибка!");
        }
    },

    writeYourGenres: function() {
        let genreNumber = 0;

        while (genreNumber < 3) {
            // let genre = prompt(`Ваш любимый жанр №${genreNumber + 1}?`, '');
            // if (genre !== null && genre !== '') {
            //     console.log('Введенные данные не являются корректными.');
            // } else {
            //     personalMovieDB.genres[genreNumber] = genre; //Метод с 
                                                                //повторением
            // }
            // genreNumber = personalMovieDB.genres.length; 

            let genre = prompt(`Введите минимум три ваших любимых жанра через запятую "жанр, жанр2, жанр3"`, '');
            if (genre == null || genre === '') {
                console.log('Введенные данные не являются корректными.');
            } else {
                personalMovieDB.genres = genre.split(', ');//Метод разделение
                                                          //строки в подстроки
            }
            genreNumber = personalMovieDB.genres.length;
        }
        let num = 1;
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};