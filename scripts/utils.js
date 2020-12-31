export const closeBtns = document.querySelector(".popup__close");

export const openPopUp = (popUpSelect) => {
  popUpSelect.classList.add("popup_visible");
  document.addEventListener("keyup", closeWithEsc);
  popUpSelect
    .querySelector(".popup__close")
    .addEventListener("click", closePopUp);
};
const ESC_KEYCODE = 27;

export const closeWithEsc = (evt) => {
  if (evt.which === ESC_KEYCODE) {
    closePopUp();
  }
};

export const closePopUp = () => {
  const findCurrent = document.querySelector(".popup_visible");
  findCurrent.classList.remove("popup_visible");
  document.removeEventListener("keyup", closeWithEsc, false);
};
export const imageModalWindow = document.querySelector(".popup__image");
const imageEl = imageModalWindow.querySelector(".grid__image_active");
const imageCap = imageModalWindow.querySelector(".popup__image_capt");

export function handlePreviewPic(data) {
  imageEl.src = data.src;
  imageCap.innerHTML = data.alt;
  imageEl.alt = data.alt;

  openPopUp(imageModalWindow);
}
