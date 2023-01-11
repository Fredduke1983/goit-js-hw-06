const loginFormEl = document.querySelector('.login-form');
const dataForm = {};

loginFormEl.addEventListener('submit', event => {
  event.preventDefault();

  if (
    loginFormEl.elements[0].value == '' ||
    loginFormEl.elements[1].value == ''
  ) {
    alert('Всі поля повинні бути заповнені');
  } else {
    dataForm.email = loginFormEl.elements[0].value;
    dataForm.password = loginFormEl.elements[1].value;
    console.log(`Email: ${dataForm.email} - Password: ${dataForm.password}`);
    loginFormEl.reset();
  }
});
