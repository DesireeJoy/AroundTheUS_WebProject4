const { default: Popup } = require("./Popup");

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__card_form-selector");
    this._submitHandler = submitHandler;
    this._submitHandler = this._submitHandler.bind(this);
  }

  _getInputValues() {
    const inputs = this._form.querySelectorAll(".form_input");
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
    const formBtn = form.querySelector(".popup__close");
    form.addEventListener("submit", () => {
      this._submitHandler();
    });
  }
}
export default PopupWithForm;
