/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((module) => {

function calc(){
    const calcTrigger = document.querySelector('[data-сalc]'),
      calc = document.querySelector('.calc'),
      calcCloseBtn = document.querySelector('[data-closeCalc]');

calcTrigger.addEventListener('click', () => {
    console.log('work');
    calc.classList.add('show');
    calc.classList.remove('hide');
});
function closeCalc(){
    // calcCloseBtn.addEventListener('click', () => {
        console.log('work');
        calc.classList.add('hide');
        calc.classList.remove('show');
    // });
}



// calcCloseBtn.addEventListener('click', closeCalc);

calc.addEventListener('click', (e) => {
    if (e.target === calc || e.target.getAttribute('data-closeCalc') == '') {
        closeCalc();
        console.log('1');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && calc.classList.contains('show')) { 
        closeCalc();
        console.log('2');
    }
});


// конвектор логика

const inputRub = document.querySelector('#rub'),
      inputUsd =  document.querySelector('#usd'),
      inputEur = document.querySelector('#eur'),
      inputGbp = document.querySelector('#gbp');
      inputSh = document.querySelector('#sheep');



inputRub.addEventListener('input', () =>{
    
    fetch('js/current.json',{
        method: 'GET',
        headers:{
            'Content-type': 'application/json'
        }
    }) 
        .then(data => data.text())
        .then(json => {
            const data =  JSON.parse(json);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            inputEur.value = (+inputRub.value / data.current.eur).toFixed(2);
            inputGbp.value= (+inputRub.value / data.current.gbp).toFixed(2);
            inputSh.value = (+inputRub.value / data.current.sh).toFixed(1);

        })
        .catch(()=>{
            inputUsd.value = 'Что то пошло не так',
            inputEur.value = 'Что то опрделенно не так'
        });
      
  





    // const request = new XMLHttpRequest();

    // request.open('GET', 'js/current.json');


    // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // request.send();

    // request.addEventListener('load', ()=> {
    //     if (request.status === 200){
    //         // console.log(request.response);
    //         const data =  JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //         inputEur.value = (+inputRub.value / data.current.eur).toFixed(2);
    //         inputGbp.value= (+inputRub.value / data.current.gbp).toFixed(2);
            
            

        
    //     }else{
    //         inputUsd.value ='Что то пошло не так';
    //         inputGbp.value ='Что то пошло не так';
    //     }
    // });


   
});
}

module.exports = calc;

/***/ }),

/***/ "./js/modules/card.js":
/*!****************************!*\
  !*** ./js/modules/card.js ***!
  \****************************/
/***/ ((module) => {

function card() {
    


class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector);
        this.transfer = 73;
        this.changeToRUS();
    }
    changeToRUS() {
        this.price = this.price * this.transfer;
    }

    render() {
        const element = document.createElement('div');

        if(this.classes.length === 0 ){
            this.element = 'menu__item';
            element.classList.add(this.element);
        }else{
            this.classes.forEach(className => element.classList.add(className));

        }


        element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
           
        `;
        this.parent.append(element);
    }
}
const getResource = async (url, data) => {
    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
};


// getResource('http://localhost:3000/menu')
// .then(data => {
//     data.forEach(({img, altimg, title, descr, price}) => {
//         new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
//     });
// });

axios.get('http://localhost:3000/menu')
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => {
            new MenuCard(img, altimg, title, descr, price,'.menu .container').render();
        });
    });
       
}

module.exports = card;

/***/ }),

/***/ "./js/modules/dino.js":
/*!****************************!*\
  !*** ./js/modules/dino.js ***!
  \****************************/
/***/ ((module) => {

function dino() {

'use srtict';
//open close dinogame

const butTrigger = document.querySelector('[data-dino]'),
      dinobox = document.querySelector('.dino-box'),
      dinoCloseBtn = document.querySelector('[data-closeGame]');


butTrigger.addEventListener('click', () =>{

    console.log('dinos F work');
    dinobox.classList.add('show');
    dinobox.classList.remove('hide');
});

function closeDino(){
    dinoCloseBtn.addEventListener('click', () => {
        console.log('close work');
        dinobox.classList.add('hide');
        dinobox.classList.remove('show');
    });
}

dinobox.addEventListener('click', (e) => {
    if(e.target === dinobox || e.target.getAttribute('data-closeGame') == ''){
        closeDino();
        console.log('1');
    }
   
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && dinobox.classList.contains('show')) { 
        closeDino();
        console.log('2');
    }
});







const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');




// логика игры
document.addEventListener('keydown', function(event){
    jump();
});

let summm = 0;

function jump(){
    
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
        console.log('jump work');
        summm ++;
        
    }
    setTimeout(function(){
        dino.classList.remove('jump');
    }, 500);
}
let count = 0;

let isAlife = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        let result = confirm(`game over your scour is`);
        
        if (result == true){
            dinobox.classList.add('hide');
            dinobox.classList.remove('show');
        }
        return console.log(summm);
      
       
        
    }
   
}, 10);

}

module.exports = dino;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
  
    //modal
    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    
    }



    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    //forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо скоро с вами свяжутся',
        failure: 'Что то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    // Function for POST method

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto`;
            form.append(statusMessage);




            const formData = new FormData(form);

            const json =JSON.stringify(Object.fromEntries(formData.entries()));
            
        
            // const object = {};

            // formData.forEach(function (value, key) {
            //     object[key] = value;
            // });


            // realise post method with function send data on json-server

            postData('http://localhost:3000/requests', json)
        

            .then(data => {
                console.log(data);
                showThanksModal(message.success);

                statusMessage.remove();
            })
            .catch(() => {
                showThanksModal(message.failure);
            })
            .finally(() => {
                form.reset();
            });


        });

        function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                    <div class="modal__content">
                        <div class="modal__close" data-close>x</div>
                        <div class="modal__title">${message}</div>
                    </div>
                `;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 4000);
        }



}
}

module.exports = modal;


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
   

let slideIndex = 1;

const slides = document.querySelectorAll('.offer__slide'),
    slider = document.querySelector('.offer__slider'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    total = document.querySelector('#total'),
    current = document.querySelector('#current'),
    slideWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slideWrapper).width;


let offset = 0;

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
} else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
}


function slidesLenght() {
    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }


    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
}


slidesField.style.width = 100 * slides.length + '%';

slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';

slideWrapper.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = width;
});

slider.style.position = 'relative';

const indicators = document.createElement('ol'),
    dots = [];

indicators.classList.add('carousel-indicators');
indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
`;

slider.append(indicators);

for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
    `;

    if (i == 0) {
        dot.style.opacity = 1;
    }
    indicators.append(dot);
    dots.push(dot);
}

next.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) { //'500px'
        offset = 0;

    } else {
        offset += +width.slice(0, width.length - 2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
    slidesLenght();
});

prev.addEventListener('click', () => {
    if (offset == 0) {

        offset = +width.slice(0, width.length - 2) * (slides.length - 1)

    } else {
        offset -= +width.slice(0, width.length - 2);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
    slidesLenght();
});


dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');


        slideIndex = slideTo;

        offset = +width.slice(0, width.length - 2) * (slideTo - 1);

        slidesField.style.transform = `translateX(-${offset}px)`;


        slidesLenght();


    });
});


//second variant


// showSlides(slideIndex);

// if (slides.length < 10){
//     total.textContent = `0${slides.length}`;
// }else {
//     total.textContent = slides.length;
// }

// function showSlides(n){
//     if (n > slides.length){
//         slideIndex = 1;
//     }
//     if(n < 1){
//         slideIndex= slides.length;
//     }
//     slides.forEach((item) => item.style.display = 'none');

//     slides[slideIndex -1].style.display = 'block'; 

//     if (slides.length < 10){
//         current.textContent = `0${slideIndex}`;
//     }else {
//         current.textContent = slideIndex;
//     }
// }

// function plusSlides(n){
//     showSlides(slideIndex +=n);
// }

// prev.addEventListener('click', () =>{
//     console.log('plus');
//     plusSlides(-1);
// });


// next.addEventListener('click', () =>{
//     console.log('minus');
//     plusSlides(1);
// });

}

module.exports = slider;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
    //Timer 

    const deadline = '2021-11-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
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

        updateClock();

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
   
}
module.exports = timer;



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/


window.addEventListener('DOMContentLoaded', () => {
    const calc = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js"),
          card = __webpack_require__(/*! ./modules/card */ "./js/modules/card.js"),
          dino = __webpack_require__(/*! ./modules/dino */ "./js/modules/dino.js"),
          modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
          slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
          timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
          

    calc();
    dino();
    card();
    modal();
    slider();
    timer();




     //кнопка тетрис
    //  const box = document.querySelector('[data-tetris]');

    //  box.addEventListener('click', () => {
    //      // e.preventDefault();
    //      console.log('работает');
    //      document.location.href = '/tetris/index.html';
    //      });
 
    //  setClock('.timer', deadline);

//sliders

  
});



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map