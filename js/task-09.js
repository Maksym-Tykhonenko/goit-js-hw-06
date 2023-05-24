
const btnChangCol = document.querySelector('.change-color');
const body = document.querySelector('body');
const outputText = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnChangCol.addEventListener('click', chahgeCol);

function chahgeCol() {
  body.style.backgroundColor = getRandomHexColor();
  outputText.textContent = body.style.backgroundColor;
};