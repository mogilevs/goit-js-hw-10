import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import ok from '../img/ok.png';
import err from '../img/err.png';

const form = document.querySelector('.form');
form.addEventListener('submit', formHandler);

function formHandler(evt) {
  evt.preventDefault();
  const delay = form.elements.delay.value;
  const settle = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (settle === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
    
  promise
    .then(value => {
      iziToast.show({
        position: 'topCenter',
        icon: 'icon-svg',
        iconUrl: ok,
        iconColor: 'white',
        title: 'OK',
        titleColor: 'white',
        backgroundColor: 'green',
        messageColor: 'white',
        message: `Fulfilled promise in ${value}ms`,
      });
    })
    .catch(error => {
      iziToast.show({
        position: 'topCenter',
        icon: 'icon-svg',
        iconUrl: err,
        iconColor: 'white',
        title: 'Error',
        titleColor: 'white',
        backgroundColor: 'red',
        messageColor: 'white',
        message: `Rejected promise in ${error}ms`,
      });
    });
  form.reset();
}

const inputs = document.querySelectorAll("input[type='radio']");
inputs.forEach(input => {
  input.addEventListener('change', function() {
    const fieldset = this.closest('fieldset');
    if (this.checked) {
      fieldset.style.borderColor = '#000';
    } else {
      fieldset.style.borderColor = '#808080';
    }
  });
});