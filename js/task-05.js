const textInput = document.querySelector('#name-input')
const visualOutput = document.querySelector('#name-output')

textInput.addEventListener('input', event => {
	visualOutput.textContent = event.currentTarget.value;

	if (event.currentTarget.value === '') {
        visualOutput.textContent = 'Anonymous';
	}
})

