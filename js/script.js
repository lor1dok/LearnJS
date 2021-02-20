'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Скотт Пилигрим против...",
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Ярость",
            "Новый пират",
            "Соник зе хендехох"
        ]
    };
    
    const adBlock = document.querySelector('.promo__adv'),
          promoBg = document.querySelector('.promo__bg'),
          genre = promoBg.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          inputForm = document.querySelector('.add'),
          inputFilm = inputForm.querySelector('.adding__input'),
          inputCheckBox = inputForm.querySelector('[type="checkbox"]'),
          deleteButtons = movieList.querySelectorAll('.delete');
    
    const deleteAdw = (obj) => {
        obj.remove();
    };

    const makeChanges = () => {
        genre.textContent = 'ДРАМА';
        promoBg.style.backgroundImage = 'url(../img/bg.jpg)';
    };

    deleteButtons.forEach(btn => {
        console.log(btn);
        btn.addEventListener('click', () => {
            console.log(btn);
        }); 
    });
    
    function updMovieList (newFilms, inputFilm) {
        if (inputFilm.length > 21) {
            inputFilm = `${inputFilm.substring(0, 21)}...`;
        }
    
        if (inputFilm) {
            newFilms.movies.push(inputFilm);
        }
        
        console.log(newFilms.movies);
    }

    function dynamicFilms (staticFilms, newFilms) {
        staticFilms.innerHTML = '';
    
        newFilms.sort();
        
        newFilms.forEach((film, i) => {
            staticFilms.innerHTML += `
            <li class=promo__interactive-item>
                ${i + 1} ${film}
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                dynamicFilms(staticFilms, newFilms);
            });
        });
    }

    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = inputFilm.value,
              favorite = inputCheckBox.checked;
        
        if (favorite) {
            console.log("Добавляем любимый фильм.");
        }

        updMovieList(movieDB, newFilm);
        dynamicFilms(movieList, movieDB.movies);

        event.target.reset();
    });

    deleteAdw(adBlock);
    makeChanges();
    dynamicFilms(movieList, movieDB.movies);
});