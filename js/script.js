'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const calc = require('./modules/calc'),
          card = require('./modules/card'),
          dino = require('./modules/dino'),
          modal = require('./modules/modal'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer');
          

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


