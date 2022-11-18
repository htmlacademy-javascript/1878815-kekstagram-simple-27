import './variables.js';
import './scale.js';
import './effects.js';
import {resetEffects} from './effects.js';
import {resetScale} from './scale.js';
import {uploadForm} from './variables.js';

const body = document.querySelector('body');
const formModal = body.querySelector('.img-upload__overlay');
const pictureField = uploadForm.querySelector('#upload-file');
const closeElement = uploadForm.querySelector('.img-upload__cancel');

const onPictureFieldChange = () => {
  body.classList.add('modal-open');
  formModal.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFormModal();
  }
}

const clearForm = () => {
  uploadForm.reset();
  resetScale();
  resetEffects();
};

function closeFormModal () {
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  clearForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

closeElement.addEventListener('click', closeFormModal);
pictureField.addEventListener('change', onPictureFieldChange);

export {
  closeFormModal,
  clearForm
};
