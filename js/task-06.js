const inputTextEl = document.querySelector("#validation-input");

inputTextEl.addEventListener('blur', (event) => {
    event.preventDefault();

    if (event.currentTarget.value.length ===
        Number(inputTextEl.getAttribute(["data-length"])))
    {
        inputTextEl.classList.add("valid");
        inputTextEl.classList.remove("invalid")
    }
    else {
        inputTextEl.classList.add("invalid");
    }
    
});
















