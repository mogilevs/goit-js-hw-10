import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let userSelectedDate;
const btn = document.querySelector('button');
btn.disabled = "true";
const spans = document.querySelectorAll('.value');
const days = spans[0];
const hours = spans[1];
const minutes = spans[2];
const seconds = spans[3];

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert("Please choose a date in the future");
      btn.disabled = "true";
      return;
    } else {
      userSelectedDate = selectedDates[0];
      btn.removeAttribute("disabled");
    }
  },
};
const input = document.querySelector('#datetime-picker');
const fp = flatpickr(input, options);

btn.addEventListener('click', startTimer);



function startTimer() {
  const intervalId = setInterval(timer, 1000);
  
}

function timer() {
  let period = userSelectedDate - Date.now();
  let remainingTime = convertMs(period);
  days.textContent = remainingTime.days;
  hours.textContent = remainingTime.hours;
  minutes.textContent = remainingTime.minutes;
  seconds.textContent = remainingTime.seconds;
  btn.disabled = "true";
  input.disabled = "true";
}

function addLeadingZero(str, value) {
  return str.padStart(value, '0');
}