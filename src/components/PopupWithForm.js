const { default: Popup } = require("./Popup");

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    super(this._popup);
    this._submitHandler = submitHandler;
    this._submitHandler = this._submitHandler.bind(this);
  }
  _getInputValues() {
    const inputs = this._form.querySelectorAll(".popup__input");
    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    const form = this._popup.querySelector(".form");
    formBtn = form.querySelector(".popup__close");
    formBtn.addEventListener("submit", () => {
      this._submitHandler();
    });
  }
}
export default PopupWithForm;
