const { default: Popup } = require("./Popup");

import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
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
    super.setEventLIsteners();
    this._form = this._popup.querySelector(".form");
    this._form.addEventListener("submit", () => {
      this._submitHandler();
    });
  }
}
