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