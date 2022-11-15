import './variables.js';
import './scale.js';
import {
  picturePreview,
  scaleContol,
  pictureField,
  body,
  formModal,
  comment,
  closeElement,
  ceilScale
} from './variables.js';

pictureField.onchange = () => {
  body.classList.add('modal-open');
  formModal.classList.remove('hidden');
};

const onPopupEscKeydown = document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeFormModal();
  }
});

const clearForm = () => {
  pictureField.value = '';
  picturePreview.classList = 'img-upload__preview';
  comment.value = '';
  scaleContol.value = `${ceilScale}%`;
  picturePreview.style.transform = `scale(${ceilScale / 100})`;
};

function closeFormModal () {
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  clearForm();

  document.removeEventListener('keydown', onPopupEscKeydown);
}

closeElement.addEventListener('click', () => {
  closeFormModal();
});

export {
  closeFormModal,
  clearForm
};
