export function enlarge(ele) {
  console.log(ele);
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      document.querySelector(".popup__image".classList.add("popup_visible");
      document.addEventListener("keydown", closeWithEsc, false);
      popupImage.src = pic.target.src;
      popupCaption.innerHTML = pic.target.alt;
    });
}
