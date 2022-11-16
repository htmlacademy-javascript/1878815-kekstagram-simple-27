import './variables.js';
import {uploadForm} from './variables.js';

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error'
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  uploadForm.querySelector('.text__description'),
  validateComment,
  'От 20 до 140 символов'
);

uploadForm.addEventListener('submit', (evt) => {

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
