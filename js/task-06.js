const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
    let charactersEntered = event.currentTarget.value;

    const numberCharactersValid = Number.parseInt(textInput.data - length);
    if (charactersEntered.length === Number.parseInt(textInput.getAttribute('data-length'))) {
    textInput.style.borderColor = "#4caf50";
} else {
        textInput.style.borderColor = "#f44336";
}
})
