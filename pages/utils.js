const popupImage = popupImageBlock.querySelector(".grid__image_active");
const popupCaption = popupImageBlock.querySelector(".popup__image_capt");
export function enlarge(ele) {
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      document.querySelector(".popup__image").classList.add("popup_visible");
      document.addEventListener("keydown", closeWithEsc, false);
      popupImage.src = pic.target.src;
      popupCaption.innerHTML = pic.target.alt;
    });
}

function closeWithEsc(evt) {
  if (evt.key === "Escape") {
    const findCurrent = document.querySelector(".popup_visible");
    closePopUp(findCurrent);
  }
}
