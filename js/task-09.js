
const btnChangCol = document.querySelector('.change-color');
const body = document.querySelector('body');
const outputText = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function chahgeCol() {
  body.style.backgroundColor = getRandomHexColor();
  outputText.textContent = getRandomHexColor();
}

btnChangCol.addEventListener('click', chahgeCol);


/////////////////////////////












