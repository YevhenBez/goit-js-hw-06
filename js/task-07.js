const textInput = document.querySelector('#font-size-control');

const spanForIncrease = document.querySelector('#text');

textInput.addEventListener('input', event => {

    spanForIncrease.style.fontSize = `${event.target.value}px`;
})
