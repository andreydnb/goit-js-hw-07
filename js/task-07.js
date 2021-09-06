const refs = {
    range: document.getElementById('font-size-control'),
    currentText: document.getElementById('text')
}
refs.range.addEventListener('input', onInputChange)

function onInputChange() {
    refs.currentText.style.fontSize = `${refs.range.value}px`;
}