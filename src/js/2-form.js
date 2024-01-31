'use strict!';


const feedbackForm = document.querySelector('.feedback-form');

const feedbackFormState = {
  email: localStorage.getItem('email') || '',
  message: localStorage.getItem('message') || '',
};

feedbackForm.elements.email.value = feedbackFormState.email;
feedbackForm.elements.message.value = feedbackFormState.message;


feedbackForm.addEventListener('submit', submitData);

function saveUserInputs(event) {
  const { name, value } = event.target;
  feedbackFormState[name] = value;
  localStorage.setItem(name, value);
}


feedbackForm.addEventListener('input', saveUserInputs);

function submitData(event) {
  event.preventDefault();


  console.log(feedbackFormState.email);
  console.log(feedbackFormState.message);

  localStorage.removeItem('email');
  localStorage.removeItem('message');

  feedbackForm.elements.email.value = '';
  feedbackForm.elements.message.value = '';
}
