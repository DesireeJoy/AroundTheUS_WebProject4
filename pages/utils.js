export function enlarge(ele) {
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      document.querySelector(".popup__image").classList.add("popup_visible");
      document.addEventListener("keydown", closeWithEsc, false);
      document
        .querySelector(".popup__image")
        .querySelector(".grid__image_active").src = pic.target.src;
      document
        .querySelector(".popup__image")
        .querySelector(".popup__image_capt").innerHTML = pic.target.alt;
    });
}
