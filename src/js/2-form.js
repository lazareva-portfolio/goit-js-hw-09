

'use strict';

const feedbackForm = document.querySelector('.feedback-form');

const loadFormState = () => {
  const storedState = localStorage.getItem('feedback-form-state');
  return storedState ? JSON.parse(storedState) : { email: '', message: '' };
};

const saveFormState = (state) => {
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
};

const feedbackFormState = loadFormState();

feedbackForm.elements.email.value = feedbackFormState.email;
feedbackForm.elements.message.value = feedbackFormState.message;

feedbackForm.addEventListener('submit', submitData);

function saveUserInputs(event) {
  const { name, value } = event.target;
  feedbackFormState[name] = value.trim();
  saveFormState(feedbackFormState); 

}

feedbackForm.addEventListener('input', saveUserInputs);

function submitData(event) {
  event.preventDefault();

  console.log(feedbackFormState);

  feedbackForm.reset();

  localStorage.removeItem('feedback-form-state');
}