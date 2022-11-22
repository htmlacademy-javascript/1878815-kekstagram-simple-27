import './variables.js';
import {uploadForm} from './variables.js';
import './modal.js';
import {onPopupEscKeydown} from './modal.js';

const successAlertTemplate = document.querySelector('#success').content.querySelector('.success');
const errorAlertTemplate = document.querySelector('#error').content.querySelector('.error');

const renderSuccessAlert = () => {
  const successAlert = successAlertTemplate.cloneNode(true);
  uploadForm.append(successAlert);

  const successButton = document.querySelector('.success__button');
  successButton.addEventListener('click', onCloseBtnClick);

  successAlert.addEventListener('keydown', onPopupEscKeydownnn);
};

const renderErrorAlert = () => {
  const errorAlert = errorAlertTemplate.cloneNode(true);
  uploadForm.append(errorAlert);

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', onCloseBtnClick);

  document.removeEventListener('keydown', onPopupEscKeydown);
  errorAlert.addEventListener('keydown', onPopupEscKeydownnn);
};

function onPopupEscKeydownnn (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onCloseBtnClick();
  }
}

function onCloseBtnClick() {
  const successModal = document.querySelector('.success');
  const errorModal = document.querySelector('.error');
  if (successModal) {
    successModal.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
  if (errorModal) {
    errorModal.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  }
}

export {
  renderSuccessAlert,
  renderErrorAlert
};
