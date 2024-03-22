import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let userSelectedDate = null;
let currentTime = '';

refs.startBtn.addEventListener('click', onClickStartBtn);

const optionsFlatpicker = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (userSelectedDate.getTime() < Date.now()) {
      refs.startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', optionsFlatpicker);

function onClickStartBtn(event) {
  if (userSelectedDate && currentTime === '') {
    refs.startBtn.disabled = true;
    const intervalId = setInterval(() => {
      currentTime = userSelectedDate.getTime() - Date.now();
      let result = convertMs(currentTime);
      refs.days.textContent = addLeadingZero(result.days);
      refs.hours.textContent = addLeadingZero(result.hours);
      refs.minutes.textContent = addLeadingZero(result.minutes);
      refs.seconds.textContent = addLeadingZero(result.seconds);
      if (currentTime < 1000) {
        clearInterval(intervalId);
      }
    }, 1000);
  } else {
    refs.startBtn.disabled = true;
  }
}

function addLeadingZero(value) {
  if (value <= 9) {
    return String(value).padStart(2, '0');
  }
  return value;
}

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
