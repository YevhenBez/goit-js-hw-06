const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', event => {
    let charactersEntered = event.currentTarget.value;

    const numberCharactersValid = Number.parseInt(textInput.data - length);
    if (charactersEntered.length === Number.parseInt(textInput.getAttribute('data-length'))) {

        textInput.classList.add('valid');
		if (textInput.classList.contains('invalid')) {
            textInput.classList.remove('invalid');
		}
	} else {
		if (textInput.classList.contains('valid')) {
            textInput.classList.remove('valid');
		}
        textInput.classList.add('invalid');
}
})
