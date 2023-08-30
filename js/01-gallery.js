import { galleryItems } from "./gallery-items.js";
// Change code below this line

const GalleryElements = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const bigPictureSrc = evt.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `<img src="${bigPictureSrc}" width="800" height="600">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeImgByEsc, { once: true });
      },
    }
  );
  instance.show();

  function closeImgByEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

const galleryPlace = document.querySelector(".gallery");

galleryPlace.insertAdjacentHTML("afterbegin", GalleryElements);
galleryPlace.addEventListener("click", onImgClick);
