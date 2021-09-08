const input = document.querySelector('#validation-input');
const dataLength = input.getAttribute('data-length')

input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    if (dataLength == input.value.length) {
        replaceClass('valid', 'invalid')
    }
        else {
        replaceClass('invalid', 'valid')
        }
    }
function replaceClass(addClass, removeClass) {
    input.classList.add(addClass)
    input.classList.remove(removeClass)
}