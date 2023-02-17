const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.box.style.position = 'relative';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let size = 30

function createBoxes(amount) {
  refs.box.innerHTML = '';
  for (let i = 0; i < amount; i += 1) {
    console.log(size);
    const divEl = document.createElement('div');
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    size = size + 10;
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.position = 'absolute';
    divEl.style.top = `${i * 10}px`;
    divEl.style.left = `${i * 10}px`;
    refs.box.appendChild(divEl);
  }
  return size;
}

function onCreateBoxes() {
  console.log(refs.input.value);
  createBoxes(refs.input.value);
};

function onDestroyBoxes() {
  refs.input.value = '';
  refs.box.innerHTML = '';  
};

refs.btnCreate.addEventListener('click', onCreateBoxes);
refs.btnDestroy.addEventListener('click', onDestroyBoxes);






