const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('input', textSizeChange);

function textSizeChange(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
 
};