import './variables.js';
import './scale.js';
import './effects.js';
import './validation.js';
import {resetEffects} from './effects.js';
import {resetScale} from './scale.js';
import {uploadForm} from './variables.js';
import {pristine} from './validation.js';

const body = document.querySelector('body');
const formModal = body.querySelector('.img-upload__overlay');
const pictureField = uploadForm.querySelector('#upload-file');
const closeElement = uploadForm.querySelector('.img-upload__cancel');

const openModal = () => {
  body.classList.add('modal-open');
  formModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

const clearForm = () => {
  uploadForm.reset();
  pristine.reset();
  resetScale();
  resetEffects();
};

const closeModal = () => {
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  clearForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

closeElement.addEventListener('click', closeModal);
pictureField.addEventListener('change', openModal);

export {
  closeModal,
  clearForm,
  openModal,
  onPopupEscKeydown
};
