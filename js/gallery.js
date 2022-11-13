import './data.js';
import {getCaptions} from './data.js';
getCaptions();

const pictures = document.querySelector('.pictures');
const pictureTemplete = document.querySelector('#picture').content.querySelector('.picture');

const gallery = getCaptions();
const similarListFragment = document.createDocumentFragment();

gallery.forEach(({url, description, comments, likes}) => {
  const picture = pictureTemplete.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments;
  picture.querySelector('.picture__likes').textContent = likes;
  similarListFragment.append(picture);
});

pictures.append(similarListFragment);

export {gallery};
