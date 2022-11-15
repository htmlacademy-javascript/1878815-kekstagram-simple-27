/*import './util.js';
import './modal.js';
import {uploadForm} from './modal.js';
//import {comment} from './modal.js';
//import {checkStringLength} from './util.js';

const pristine = new Pristine (uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error'
});

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

//  const isValid = pristine.validate();
});

export {
  pristine
};
