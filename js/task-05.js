

const inputText = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


inputText.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
})



















