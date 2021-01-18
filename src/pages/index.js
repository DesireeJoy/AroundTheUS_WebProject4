"use strict";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import PopupWithImage from "../scripts/PopupWithImage.js";

require("./index.css");
import "../scripts/constants.js";
import "../scripts/initialCards";
import jaqSrc from "../images/jacques.png";
import logoSrc from "../images/Logo.svg";
const jaqImage = document.getElementById("jacques-img");
jaqImage.src = jaqSrc;
const logoImage = document.getElementById("logo-img");
logoImage.src = logoSrc;

const editProfileForm = document.querySelector(".popup__form-selector");
const addCardForm = document.querySelector(".popup__card_form-selector");

const config = {
  formSelector: ".form",
  inputSelector: ".form_input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "popup__card_submit-disabled",
  inputErrorClass: "popup__form_input_type_error",
};

//Create Form Validation
const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//CreateCards
function createCard(cardData) {
  const newCard = new Card(cardData, "#cardTemplate", (link, text) => {
    imagePopup.open(link, text);
  });
  const cardElement = newCard.generateCard();
  return cardElement;
}
//Create Default Carts
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData);
  gridList.prepend(cardElement);
});
//Create Popups with Forms
const addCardPopup = new PopupWithForm(".popup__card_form-selector", () => {
  const cardData = this._getInputValues;
  const card = new Card(cardData, "#cardTemplate", (link, text) => {
    imagePopup.open(link, text);
  });
  const cardElement = newCard.generateCard();
  this._close();
  gridList.prepend(cardElement);
});

const editProfilePopup = new PopupWithForm(".popup__form-selector", () => {
  const userData = this._getInputValues;
  this._close();
  currentName.textContent = userData.profileName;
  currentTitle.textContent = userData.profileTitle;
  resetCardForm();
});

const imagePopup = new PopupWithImage(".popup__image");

// //Accepts Submit Event for Adding a New Card
// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   const cardData = {
//     name: inputPlace.value,
//     link: inputUrl.value,
//     alt: inputPlace.value,
//   };
//   const cardElement = createCard(cardData);
//   closePopUp(popUpCard); //
//   gridList.prepend(cardElement);
//   resetCardForm();
// }

// function resetCardForm() {
//   addForm.reset();
// }

// function handleUserFormSubmit(evt) {
//   // This line stops the browser from submitting the form in the default way.
//   evt.preventDefault();

// Insert new values using the textContent property of the
// querySelector() method
// currentName.textContent = inputName.value;
//   currentTitle.textContent = inputTitle.value;
//   closePopUp(); //
// }

// profileForm.addEventListener("submit", handleUserFormSubmit);
// popUpCard.addEventListener("submit", handleCardFormSubmit);
// addBtn.addEventListener("click", () => {
//   openPopUp(popUpCard);
// });

// editBtn.addEventListener("click", () => {
//   inputName.value = currentName.textContent;
//   inputTitle.value = currentTitle.textContent;
//   openPopUp(popUpProfile);
// });

// const popups = document.querySelectorAll(".popup");

// popups.forEach((popup) => {
//   popup.addEventListener("click", (evt) => {
//     if (evt.target.classList.contains("popup_visible")) {
//       closePopUp(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopUp(evt.target);
//     }
//   });
// });
