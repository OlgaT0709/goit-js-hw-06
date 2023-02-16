const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
textRef.style.fontSize = `${inputRef.value}px`;

inputRef.addEventListener('change', textSizeChange);

function textSizeChange(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;
 
};