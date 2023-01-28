import { galleryItems } from './gallery-items.js';
// Change code below this line

const GalleryElements = galleryItems.map(({preview, original, description}) =>
    `<a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>`).join("");

const galleryPlace = document.querySelector(".gallery");

galleryPlace.insertAdjacentHTML("afterbegin", GalleryElements);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});

