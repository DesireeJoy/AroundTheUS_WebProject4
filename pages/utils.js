export const openPopup = (popUpSelect) => {
  popUpSelect.classList.add("popup_visible");
  document.addEventListener("keyup", closeWithEsc);
};
const ESC_KEYCODE = 27;

export const closeWithEsc = (evt) => {
  if (evt.which === ESC_KEYCODE) {
    const findCurrent = document.querySelector(".popup_visible");
    closePopUp(findCurrent);
  }
};

export const closePopUp = (popUpSelect) => {
  popUpSelect.classList.remove("popup_visible");
  document.removeEventListener("keydown", closeWithEsc, false);
};
export const imageModalWindow = document.querySelector(".popup__image");
export const imageEl = imageModalWindow.querySelector(".grid__image_active");
export const imageCap = imageModalWindow.querySelector(".popup__image_capt");

export function handlePreviewPic(data) {
  imageEl.src = data.src;
  imageCap.innerHTML = data.alt;
  imageEl.alt = data.alt;

  openPopup(imageModalWindow);
}
