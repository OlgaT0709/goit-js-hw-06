const inputRef = document.querySelector('#validation-input')
inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    
    event.currentTarget.value.length === Number(inputRef.dataset.length)
        ? inputRef.classList.add('valid')
        : inputRef.classList.add('invalid');   
     
};

inputRef.addEventListener('focus', onInputFocus);

function onInputFocus(event) {
    if (inputRef.classList.value === 'invalid') {
        inputRef.classList.remove('invalid');
    } else if (inputRef.classList.value === 'valid'){
         inputRef.classList.remove('valid');
    }
};