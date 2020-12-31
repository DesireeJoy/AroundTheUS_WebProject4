"use strict";
import Card from "./card.js";
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
  inputSelector: ".input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error",
};

const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

initialCards.forEach((cardData) => {
  const thisCard = new Card(cardData, "#cardTemplate");
  const cardElement = thisCard.generateCard();
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
  const newCard = new Card(cardData, "#cardTemplate");

  //Form Values
  const cardElement = newCard.generateCard();
  closePopUp(); //
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

//FUNCTIONS FOR ALL PLACE CARDS

// Connect the handler to the form:
// it will watch the submit event

// Open Popups

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
// Close Popups
//profileForm.querySelector(".popup__close").addEventListener("click", () => {
//  const popupName = evt.closest(".popup");
//  console.log(popupName);
//  closePopUp(popUpName);
//});

// addForm.querySelector(".popup__close").addEventListener("click", () => {
//   closePopUp(popUpCard);
// });

popUpCard.addEventListener("click", (evt) => {
  if (evt.target === popUpCard) {
    closePopUp();
  }
});

// popUpProfile.addEventListener("click", (evt) => {
//   if (evt.target === popUpProfile) {
//     closePopUp(popUpProfile);
//   }
// });

// imageModalWindow.addEventListener("click", (evt) => {
//   if (evt.target === imageModalWindow) {
//     closePopUp(imageModalWindow);
//   }
// });
