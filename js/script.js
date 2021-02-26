"use strict";

window.addEventListener('DOMContentLoaded', () => {

    // TABS
    const tabs = document.querySelectorAll(".tabheader__item"),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display ='none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
               if (target == item) {
                   hideTabContent();
                   showTabContent(i);
               } 
            });
        }
    });

    // Timer

    const deadline = '2021-02-27';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
        
              return {
                  'total': t,
                  'days': days,
                  'hours': hours,
                  'minutes': minutes,
                  'seconds': seconds
              };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }   else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock(); // init, fixes on page refresh timer blink

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    const modalBtn = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');

    console.log(modalWindow);
    console.log(modalBtn);

    function openModal() {
        document.body.style.overflow = 'hidden';
        modalWindow.style.display = 'block';
        clearInterval(modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
    }

    function closeModal() {
        document.body.style.overflow = '';
        modalWindow.style.display = '';
    }

    modalBtn.forEach(element => {
        console.log(modalWindow.style.display);
        element.addEventListener ('click', () => {
            if (modalWindow.style.display === '') {
                openModal();
            } else {
                closeModal();
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWindow.style.display === 'block') {
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= 
            document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    // Dynamic menu cards

    class MenuCard {
        constructor(imgSrc, imgAlt, name, desc, cost, parentSelector, ...classes) {
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;
            this.name = name;
            this.desc = desc;
            this.cost = cost;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 70;
            this.changeToRUB();
        }

        changeToRUB() {
            this.cost = +this.cost * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            }

            this.classes.forEach(className => element.classList.add(className));
            element.innerHTML = `
                <img src=${this.imgSrc} alt=${this.imgAlt}>
                <h3 class="menu__item-subtitle">${this.name}</h3>
                <div class="menu__item-descr">${this.desc}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total">
                        <span>${this.cost}</span> руб/день
                    </div>
                </div>
            `;
            this.parent.append(element);
        }     
    }

    // const div = new MenuCard(); // Работает

    document.querySelector('.menu__field .container').innerHTML = '';
    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container',
        'menu__item',
        'big'
        ).render(); // для единоразового использование этот вариант подойдет лучше
    
    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        8,
        '.menu .container'
        ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        11,
        '.menu .container'
        ).render();
});