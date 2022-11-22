import './variables.js';
import {uploadForm} from './variables.js';

const MINLENGTH = 20;
const MAXLENGTH = 140;

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error'
});

const validateComment = (string) => string.length >= MINLENGTH && string.length <= MAXLENGTH;

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

export {pristine};
