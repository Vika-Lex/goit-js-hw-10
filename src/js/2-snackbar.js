import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    delay: event.target.elements.delay.value,
    state: event.target.elements.state.value,
  };

  createPromise(formData)
    .then(data => iziToast.success({ message: data, position: 'topRight' }))
    .catch(err => iziToast.error({ message: err, position: 'topRight' }));
  refs.form.reset();
}

function createPromise({ delay, state }) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`Fullfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise on ${delay}ms`);
      }
    }, delay);
  });

  return myPromise;
}
