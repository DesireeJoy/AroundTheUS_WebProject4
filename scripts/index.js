"use strict";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  imageModalWindow,
  openPopUp,
  closePopUp,
  closeWithEsc,
} from "./utils.js";

const inputPlace = document.querySelector("#inputPlace");
const inputUrl = document.querySelector("#inputFile");

const editProfileForm = document.querySelector(".popup__form-selector");
const addCardForm = document.querySelector(".popup__card_form-selector");

const config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error",
};

const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

function createCard(cardData) {
  const newCard = new Card(cardData, "#cardTemplate");
  const cardElement = newCard.generateCard();
  return cardElement;
}

initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  gridList.prepend(cardElement);
});

//Accepts Submit Event for Adding a New Card
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = {
    name: inputPlace.value,
    link: inputUrl.value,
    alt: inputPlace.value,
  };
  const cardElement = createCard(cardData);
  closePopUp(popUpCard); //
  gridList.prepend(cardElement);
  resetCardForm();
}

function resetCardForm() {
  addForm.reset();
}

function handleUserFormSubmit(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  // Insert new values using the textContent property of the
  // querySelector() method
  currentName.textContent = inputName.value;
  currentTitle.textContent = inputTitle.value;
  closePopUp(); //
}

profileForm.addEventListener("submit", handleUserFormSubmit);
popUpCard.addEventListener("submit", handleCardFormSubmit);
addBtn.addEventListener("click", () => {
  openPopUp(popUpCard);
});

editBtn.addEventListener("click", () => {
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
  openPopUp(popUpProfile);
});

const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_visible")) {
      closePopUp(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopUp(evt.target);
    }
  });
});
