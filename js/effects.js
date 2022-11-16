import './variables.js';
import {picturePreview} from './variables.js';

const pictureEffects = document.querySelector('.effects__list');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

const EFFECTS_LIST = [
  {
    id: 'effect-none',
    filter: 'none',
    step: 1,
    min: 0,
    max: 100,
    unit: ''
  },

  {
    id: 'effect-chrome',
    filter: 'grayscale',
    step: 0.1,
    min: 0,
    max: 1,
    unit: ''
  },

  {
    id: 'effect-heat',
    filter: 'brightness',
    step: 0.1,
    min: 1,
    max: 3,
    unit: ''
  },

  {
    id: 'effect-sepia',
    filter: 'sepia',
    step: 0.1,
    min: 0,
    max: 1,
    unit: ''
  },

  {
    id: 'effect-marvin',
    filter: 'invert',
    step: 1,
    min: 0,
    max: 100,
    unit: '%'
  },

  {
    id: 'effect-phobos',
    filter: 'blur',
    step: 0.1,
    min: 0,
    max: 3,
    unit: 'px'
  }
];

let currentEffect;
const DEFAULT_EFFECT = EFFECTS_LIST[0];
currentEffect = DEFAULT_EFFECT;

const updateSlider = () => {
  if (currentEffect === DEFAULT_EFFECT) {
    sliderElement.classList.add('hidden');
  }
  if (currentEffect !== DEFAULT_EFFECT) {
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: currentEffect.min,
        max: currentEffect.max,
      },
      start: currentEffect.max,
      step: currentEffect.step,
      connect: 'lower',
    });
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});

updateSlider();

sliderElement.noUiSlider.on('update', () => {
  if (currentEffect === DEFAULT_EFFECT) {
    sliderElement.classList.add('hidden');
  }
  valueElement.value = sliderElement.noUiSlider.get();
});

const onEffectChange = (evt) => {
  currentEffect = EFFECTS_LIST.find((effect) => effect.id === evt.target.id);
  updateSlider();
};

const onSliderUpdate = () => {
  picturePreview.style.filter = 'none';
  if (currentEffect === DEFAULT_EFFECT) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  picturePreview.style.filter = `${currentEffect.filter}(${sliderValue}${currentEffect.unit})`;
};

const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  picturePreview.style.filter = 'none';
  updateSlider();
};

pictureEffects.addEventListener('change', onEffectChange);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
