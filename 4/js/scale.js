import './variables.js';
import {
  picturePreview,
  scaleContol,
  scaleStep,
  scaleSmaller,
  scaleBigger,
  ceilScale,
  floorScale
} from './variables.js';

let scaleValue = ceilScale;

scaleBigger.onclick = () => {
  if (scaleValue >= floorScale && scaleValue < ceilScale) {
    scaleValue += scaleStep;
    scaleContol.value = `${scaleValue}%`;
    picturePreview.style.transform = `scale(${scaleValue / 100})`;
  }
};

scaleSmaller.onclick = () => {
  if (scaleValue > floorScale && scaleValue <= ceilScale) {
    scaleValue -= scaleStep;
    scaleContol.value = `${scaleValue}%`;
    picturePreview.style.transform = `scale(${scaleValue / 100})`;
  }
};
