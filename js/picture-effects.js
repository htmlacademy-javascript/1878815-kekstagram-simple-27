const pictureEffects = document.querySelector('.effects__list');
const pictirePreview = document.querySelector('.img-upload__preview');

const effectList = [
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

pictureEffects.addEventListener('change', (evt) => {
  effectList.forEach((effect) => {
    if (evt.target.id === 'effect-none') {
      pictirePreview.classList.remove(effect.class);
    }
    if (effect.id === evt.target.id) {
      pictirePreview.className = 'img-upload__preview';
      pictirePreview.classList.add(effect.class);
    }
  });
}
);

export {pictureEffects};
