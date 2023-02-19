const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

btnIncrement.addEventListener('click', function (){
    counterValue += 1;
    counterValueRef.textContent = counterValue;
    // value.textContent = counterValue; не розумію чому так працює також
    // console.log(value.textContent);
    
});

btnDecrement.addEventListener('click', function (){
    counterValue -= 1;
    counterValueRef.textContent = counterValue;
    // console.log(value);
    
});

