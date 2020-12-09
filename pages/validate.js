function enableValidation() {}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute("disabled");
    addButton.classList.remove("popop__input_disabled");
  } else {
    addButton.setAttribute("disabled", true);
    addButton.classList.remove("popop__input_disabled");
  }
}
