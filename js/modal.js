const pictureField = document.querySelector('#upload-file');
const formModal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const closeElement = formModal.querySelector('.img-upload__cancel');

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

function closeFormModal () {
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('#upload-select-image').reset();
  document.querySelector('.img-upload__preview').classList = 'img-upload__preview';

  document.removeEventListener('keydown', onPopupEscKeydown);
}

closeElement.addEventListener('click', () => {
  closeFormModal();
});

export {
  pictureField,
  onPopupEscKeydown,
  closeFormModal
};
