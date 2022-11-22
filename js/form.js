import './variables.js';
import './effects.js';
import './validation.js';
import './modal.js';
import './alerts.js';
import './api.js';
import {sendData} from './api.js';
import {uploadForm} from './variables.js';
import { pristine } from './validation.js';
import {closeModal} from './modal.js';
import {renderSuccessAlert} from './alerts.js';
import {renderErrorAlert} from './alerts.js';

const setFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if(isValid) {
      sendData(
        () => onSuccess(renderSuccessAlert()),
        () => renderErrorAlert(),
        new FormData(evt.target)
      );
    }
  });
};

setFormSubmit(closeModal);

export {setFormSubmit};
