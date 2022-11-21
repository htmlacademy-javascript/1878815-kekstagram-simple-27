import './alerts.js';
import './gallery.js';
import {renderGallery} from './gallery.js';
import {renderSuccessAlert} from './alerts.js';
import {renderErrorAlert} from './alerts.js';

const getData = () => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderGallery(pictures);
    });
};
getData();

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://27.javascript.pages.academy/kekstagram-simple',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(renderSuccessAlert);
      } else {
        onFail(renderErrorAlert);
      }
    })
    .catch(() => {
      onFail(renderErrorAlert);
    });
};

export {getData, sendData};
