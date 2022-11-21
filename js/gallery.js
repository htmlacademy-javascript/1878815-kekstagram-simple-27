const gallery = document.querySelector('.pictures');
const pictureTemplete = document.querySelector('#picture').content.querySelector('.picture');

const renderGallery = (pictures) => {
  const similarListFragment = document.createDocumentFragment();

  pictures.forEach(({url, description, comments, likes}) => {
    const picture = pictureTemplete.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__comments').textContent = comments;
    picture.querySelector('.picture__likes').textContent = likes;
    similarListFragment.append(picture);
  });
  gallery.append(similarListFragment);
};
export {renderGallery};
