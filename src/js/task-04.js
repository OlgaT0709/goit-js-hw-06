const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

btnIncrement.addEventListener('click', function (){
    counterValue += 1;
    counterValueRef.textContent = counterValue;
    
});

btnDecrement.addEventListener('click', function (){
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
    
});

