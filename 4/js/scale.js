import './variables.js';
import {
  picturePreview,
  scaleContol
} from './variables.js';

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

const SCALE_STEP = 25;
const CEIL_SCALE = 100;
const FLOOR_SCALE = 25;

let scaleValue = CEIL_SCALE;

const onClickScaleBigger = () => {
  if (scaleValue >= FLOOR_SCALE && scaleValue < CEIL_SCALE) {
    scaleValue += SCALE_STEP;
    scaleContol.value = `${scaleValue}%`;
    picturePreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

const onClickScaleSmaller = () => {
  if (scaleValue > FLOOR_SCALE && scaleValue <= CEIL_SCALE) {
    scaleValue -= SCALE_STEP;
    scaleContol.value = `${scaleValue}%`;
    picturePreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

scaleSmaller.addEventListener('click', onClickScaleSmaller);
scaleBigger.addEventListener('click', onClickScaleBigger);

const resetScale = () => {
  scaleContol.value = `${CEIL_SCALE}%`;
  picturePreview.style.transform = `scale(${CEIL_SCALE / 100})`;
};

export {resetScale};
