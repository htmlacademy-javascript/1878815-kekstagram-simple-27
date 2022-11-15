const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');
const formModal = uploadForm.querySelector('.img-upload__overlay');
const pictureField = uploadForm.querySelector('#upload-file');
const closeElement = formModal.querySelector('.img-upload__cancel');
const scaleContol = formModal.querySelector('.scale__control--value');
const picturePreview = formModal.querySelector('.img-upload__preview');
const comment = formModal.querySelector('.text__description');
const pictureEffects = document.querySelector('.effects__list');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleStep = 25;
const ceilScale = 100;
const floorScale = 25;

export {
  body,
  uploadForm,
  formModal,
  pictureField,
  closeElement,
  scaleContol,
  picturePreview,
  comment,
  scaleStep,
  pictureEffects,
  scaleSmaller,
  scaleBigger,
  ceilScale,
  floorScale
};
