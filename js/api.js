import './alerts.js';
import './gallery.js';
import {renderGallery} from './gallery.js';

const GET_DATA_LINK = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_LINK = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = () => {
  fetch(GET_DATA_LINK)
    .then((response) => response.json())
    .then((pictures) => {
      renderGallery(pictures);
    });
};
getData();

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_LINK,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
