const inputText = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

////////////1
inputText.addEventListener("input", (event) => {

    nameOutput.textContent = event.currentTarget.value
        ? event.currentTarget.value
        : 'Anonymous'
});
/////////////2
//inputText.addEventListener("input", helloName)
//
//function helloName(event) {
//    if (event.currentTarget !== "") {
//        nameOutput.textContent = event.currentTarget.value
//    }
//    else {
//        nameOutput.textContent = "Anonymous"
//    }
//}

















