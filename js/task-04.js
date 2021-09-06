const refs = {
decreaseBtn: document.querySelector('[data-action="decrement"]'),
increaseBtn: document.querySelector('[data-action="increment"]'),
counterValue: document.querySelector('#value'),
}

let resultValue = 0;

refs.increaseBtn.addEventListener('click', onValueIncrease);
refs.decreaseBtn.addEventListener('click', onValueDecrease);

function onValueIncrease() {
 refs.counterValue.textContent = resultValue += 1;
}

function onValueDecrease() {
refs.counterValue.textContent =  resultValue -= 1;
}
