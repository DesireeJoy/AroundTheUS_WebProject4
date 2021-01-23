"use strict";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

import "./index.css";

import {
  editBtn,
  addBtn,
  inputName,
  inputTitle,
  gridList,
} from "../scripts/constants.js";

import initialCards from "../scripts/initialCards";

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
  const link = cardData.link;
  const text = cardData.name;
  const newCard = new Card(
    { name: text, link: link },
    "#cardTemplate",
    (link, text) => {
      imagePopup.open(link, text);
    }
  );
  const cardElement = newCard.generateCard();
  return cardElement;
}

// //Create Default Cards
// initialCards.forEach((cardData) => {
//   const cardElement = createCard(cardData);
//   gridList.prepend(cardElement);
// });

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      initialCardList.addItem(cardElement);
    },
  },
  ".grid__list"
);
initialCardList.renderItems();

const imagePopup = new PopupWithImage(".popup__image");
imagePopup.setEventListeners();

const addCardPopup = new PopupWithForm(".popup__card", () => {
  const values = addCardPopup._getInputValues();
  const cardData = { name: values.placeName, link: values.placeFileName };
  const card = createCard(cardData);
  gridList.prepend(card);
  addCardPopup.close();
});
addCardPopup.setEventListeners();

addBtn.addEventListener("click", () => {
  addCardPopup.open();
});

// const editProfilePopup = new PopupWithForm(".popup_edit", () => {

//   const userData = editProfilePopup._getInputValues();
//   editProfilePopup.close();
//   currentName.textContent = userData.profileName;
//   currentTitle.textContent = userData.profileTitle;
// });
// editProfilePopup.setEventListeners();

// editBtn.addEventListener("click", () => {
//   editProfilePopup.open();
// });

const editProfilePopup = new PopupWithForm(".popup_edit", () => {
  userInfo.setUserInfo({ name: inputName.value, about: inputTitle.value });
  editProfilePopup.close();
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profiletitle",
});

editProfilePopup.setEventListeners();

editBtn.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputTitle.value = about;
  editProfileValidator.resetValidation();
  editProfilePopup.open();
});

// const editPopup = new PopupWithForm(".popup__type_edit-profile", () => {
//   userInfo.setUserInfo({ name: nameInput.value, about: aboutMeInput.value });
//   editPopup.close();
// });

// const userInfo = new UserInfo({
//   nameSelector: ".profile__name",
//   aboutSelector: ".profile__occupation",
// });

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
