function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorRef = document.querySelector('.change-color');
const colorDescriptionRef = document.querySelector('.color')
const bodyRef =  document.querySelector('body')

btnChangeColorRef.addEventListener('click', changeColor);

function changeColor(event ) {
  
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorDescriptionRef.textContent = bodyRef.style.backgroundColor;
};


