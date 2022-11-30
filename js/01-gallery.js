import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = createElement(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItem);
galleryEl.addEventListener('click', openModal);

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

function openModal(event) {
  event.preventDefault(); //запрет на открытие новой вкладки
  const targetPicture = event.target.dataset.source;
  const modal = basicLightbox.create(`
		<img src="${targetPicture}">
	`);
  modal.show();

  if (modal.show()) {
    window.addEventListener('keydown', event => {
      if (event.key != 'Escape') {
        return;
      } else {
        modal.close();
        window.removeEventListener('keydown', event);
      }
    });
  }
}
