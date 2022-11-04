const DESCRIPTION = [
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

const LIKES = {
  min: 15,
  max: 25,
};

const COMMENTS = {
  min: 0,
  max: 200,
};

const CAPTION_COUNT = 25;

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength('hjdskhds', 2);

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const createCaption = (i) => {
  const id = i + 1;

  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(LIKES.min, LIKES.max),
    comments: getRandomPositiveInteger(COMMENTS.min, COMMENTS.max),
  };
};

function getCaptions () {
  return Array.from({length: CAPTION_COUNT}, (_, i) => createCaption(i));
}

getCaptions ();
