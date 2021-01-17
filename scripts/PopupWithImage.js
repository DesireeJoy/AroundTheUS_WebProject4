import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(newSrc, newCaption) {
      super.open();
      const image = this._popup.querySelector(".grid__image_active");
    const caption = this._popup.querySelector(".popup__image_capt");
    image.src = newSrc;
    caption.textContent = newCaption;

    )
}


export default PopupWithImage;