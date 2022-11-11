import './util.js';
import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

const DESCRIPTIONS = [
  'Искупалось солнце',
  'Докрашиваю памяти лубок.',
  'как тотчас дни – адепты света',
  'в плену сентябрьской тоски',
  'Мой бог, мой брат.',
  'а я вам открыл столько стихов шкатулок,',
  'Версия необузданности –  ',
  'Дети России',
  'Как велела дева',
  'а после белыми снегами',
  'гурьбой толпятся у двери',
  'Но схлынет пена дней и снова',
  'июнь маячит впереди,',
  'Тебе даря?',
  'Марина Николаева-Бурак'
];

const likes = {
  min: 15,
  max: 25,
};

const comments = {
  min: 0,
  max: 200,
};

const CAPTION_COUNT = 25;

const createCaption = (i) => {
  const id = i + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(likes.min, likes.max),
    comments: getRandomPositiveInteger(comments.min, comments.max),
  };
};

function getCaptions () {
  return Array.from({length: CAPTION_COUNT}, (_, i) => createCaption(i));
}

export { getCaptions };
