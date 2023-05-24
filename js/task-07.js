
const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");


fontSizeControlEl.addEventListener("input", changeWordSize);

function changeWordSize(e) {
    textEl.style.fontSize = `${e.currentTarget.value}px`;
}












