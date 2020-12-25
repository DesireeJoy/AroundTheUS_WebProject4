export function enlarge(ele) {
  this._templateElement
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      popupImageBlock.classList.add("popup_visible");
      document.addEventListener("keydown", closeWithEsc, false);
      popupImage.src = pic.target.src;
      popupCaption.innerHTML = pic.target.alt;
    });
}
