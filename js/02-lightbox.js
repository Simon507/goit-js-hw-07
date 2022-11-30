import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItem = createElement(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItem);
galleryEl.addEventListener('click', openModal);

function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
             `;
    })
    .join('');
}

function openModal(event) {
  event.preventDefault(); //запрет на открытие новой вкладки
  const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
