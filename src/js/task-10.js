function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
  
};

refs.box.style.position = "relative"

refs.input.addEventListener('change', (event) => {
  const amount = event.currentTarget.value;
  return amount;
}); 

function CreateBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
  const size = 30 + i * 10;
  const divEl = document.createElement('div');
  divEl.style.width = `${size}px`;
  divEl.style.height = `${size}px`;
  divEl.style.backgroundColor = getRandomHexColor();
  divEl.style.position = 'absolute';
  divEl.style.top = `${size}px`;
  divEl.style.left = `${size}px`;
  refs.box.appendChild(divEl);
}};

function destroyBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.querySelector('#boxes div');
    divEl.remove();
}};

refs.btnCreate.addEventListener('click', onCreateBoxes);
refs.btnDestroy.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
CreateBoxes(10);
 };

function onDestroyBoxes() {
destroyBoxes(10)  
};




