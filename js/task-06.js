const valInput = document.getElementById('validation-input');
let countLength = 0;

valInput.addEventListener('input', () => {
  countLength = valInput.value.length;
});

valInput.addEventListener('blur', () => {
  if (countLength == valInput.dataset.length) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
  } else {
    valInput.classList.add('invalid');
    valInput.classList.remove('valid');
  }
});
