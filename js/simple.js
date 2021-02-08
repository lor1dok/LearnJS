'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null ||
        isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
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
}

// rememberMyFilms();

function detectPersonaLevel() {
    if (personalMovieDB.count > 30) {
        console.log("Да вы киноман");
    } else if (personalMovieDB.count > 10) {
        console.log("Вы любитель кино");
    } else if (personalMovieDB.count > 0) {
        console.log("Вы новичок");
    } else {
        console.log("Произошла какая-то ошибка!")
    }
}

// detectPersonaLevel();

function writeYourGenres(objDB) {
    let genreNumber = 0;
    while (genreNumber < 2) {
        genreNumber = objDB.genres.length;
        objDB.genres[genreNumber] = prompt(`Ваш любымый жанр №${genreNumber + 1}?`, '')
    }
}

writeYourGenres(personalMovieDB);

function showMyDB(objHid) {
    if (!objHid) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);