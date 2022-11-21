import './variables.js';
import {uploadForm} from './variables.js';

const successAlertTemplete = document.querySelector('#success').content.querySelector('.success');
const errorAlertTemplete = document.querySelector('#error').content.querySelector('.error');

const renderSuccessAlert = () => {
  const documentFragment = document.createDocumentFragment();
  const successAlert = successAlertTemplete.cloneNode(true);
  documentFragment.append(successAlert);
  uploadForm.append(documentFragment);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', closeSuccessAlert);

  document.addEventListener('keydown', onPopupEscKeydown);
};

const renderErrorAlert = () => {
  const documentFragment = document.createDocumentFragment();
  const errorAlert = errorAlertTemplete.cloneNode(true);
  documentFragment.append(errorAlert);
  uploadForm.append(documentFragment);

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', closeErrorAlert);

  document.addEventListener('keydown', onPopupEscKeydown);
};

function onPopupEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessAlert();
    closeErrorAlert();
  }
}

function closeSuccessAlert() {
  const successModal = document.querySelector('.success');
  successModal.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

function closeErrorAlert() {
  const errorModal = document.querySelector('.error');
  errorModal.remove();
  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {
  renderSuccessAlert,
  renderErrorAlert
};
