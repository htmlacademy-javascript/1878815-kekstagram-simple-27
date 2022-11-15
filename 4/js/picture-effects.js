import './variables.js';
import {
  picturePreview,
  pictureEffects
} from './variables.js';

const effectsList = [
  {
    id: 'effect-chrome',
    class: 'effects__preview--chrome'
  },

  {
    id: 'effect-heat',
    class: 'effects__preview--heat'
  },

  {
    id: 'effect-sepia',
    class: 'effects__preview--sepia'
  },

  {
    id: 'effect-marvin',
    class: 'effects__preview--marvin'
  },

  {
    id: 'effect-phobos',
    class: 'effects__preview--phobos'
  }
];

pictureEffects.addEventListener('input', (evt) => {
  effectsList.forEach((effect) => {
    if (evt.target.id === 'effect-none') {
      picturePreview.classList.remove(effect.class);
    }
    if (effect.id === evt.target.id) {
      picturePreview.className = 'img-upload__preview';
      picturePreview.classList.add(effect.class);
    }
  });
}
);

export {pictureEffects};
