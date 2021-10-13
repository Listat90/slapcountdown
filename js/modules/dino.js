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