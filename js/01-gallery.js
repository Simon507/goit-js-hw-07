import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

const galleryEl = document.querySelector('.gallery');
const galleryItem = createElement(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItem);
galleryEl.addEventListener('click', elementClick);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
}

function elementClick(event) {
  event.preventDefault(); //запрет на открытие новой вкладки
  openModal();
}

function openModal() {
  const targetPicture = event.target.dataset.source;
  const modal = basicLightbox.create(`
		<img src="${targetPicture}">
	`);
  modal.show();
}
