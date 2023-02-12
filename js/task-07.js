const textInput = document.querySelector('#font-size-control');

const spanForIncrease = document.querySelector('#text');

const textForIncrease = spanForIncrease.textContent;

spanForIncrease.style.fontSize = "16px";

console.log('16px' + '4px');

textInput.addEventListener('input', event => {

    let sizeInitial = Number.parseInt(spanForIncrease.style.fontSize);

    sizeInitial += 1;

    let inputlength = Number(event);

    
    console.log(inputlength);
})
