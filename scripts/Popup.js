class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classLIst.add("popup_visible");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popup.classLIst.remove("popup_visible");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.which === ESC_KEYCODE) {
      close();
    }
  }
  setEventListeners() {
    const closeBtn = this._popup.querySelector(".popup__close");
    closeButn.addEventListener("click", () => {
      this.close();
    });
  }
}

export default Popup;
