class FormValidator {
  constructor(settingsObject, formElement) {
    // the text and the image are private fields,
    // they're only needed inside the class
    this._settings = settingsObject;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.inputErrorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    errorElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = "";
  }

  _toggleButtonState(inputsList, buttonElement) {
    if (this._hasInvalidInput(inputsList)) {
      buttonElement.classList.add(this._settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _hasInvalidInput(inputsList) {
    return inputsList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    //Make an array of all the inputs that are in the formElement
    const inputsList = Array.from(
      this._formElement.querySelectorAll(this._settings.inputSelector)
    );

    //Submit Button associated with that form
    const buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );

    //Go through each input individually
    inputsList.forEach((inputElement) => {
      //If that input is touched, we immediately check validity
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement); // Step 3
        this._toggleButtonState(inputsList, buttonElement); // Step 4
      });
    });
  }
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement, this._settings);
  }
}

export default formValidator;
