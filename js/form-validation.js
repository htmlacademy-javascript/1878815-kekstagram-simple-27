import './variables.js';
import {uploadForm} from './variables.js';

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error'
});

uploadForm.addEventListener('submit', (evt) => {

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {
  pristine
};
