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
  editProfileForm,
  addCardForm,
  config,
} from "../scripts/constants.js";

import initialCards from "../scripts/initialCards";

//Create Form Validation
const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

//CreateCards
function createCard(cardData) {
  const newCard = new Card(cardData, "#cardTemplate", (link, text) => {
    imagePopup.open(cardData.link, cardData.name);
  });
  const cardElement = newCard.generateCard();
  return cardElement;
}

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

const addCardPopup = new PopupWithForm(".popup__card", (values) => {
  const cardData = { name: values.placeName, link: values.placeFileName };
  const card = createCard(cardData);
  initialCardList.addItem(card);
  addCardPopup.close();
});

addCardPopup.setEventListeners();

addBtn.addEventListener("click", () => {
  addCardValidator.resetValidation();
  addCardPopup.open();
});

const editProfilePopup = new PopupWithForm(".popup_edit", () => {
  userInfo.setUserInfo({ name: inputName.value, about: inputTitle.value });
  editProfilePopup.close();
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__title",
});

editProfilePopup.setEventListeners();

editBtn.addEventListener("click", () => {
  const { name, title } = userInfo.getUserInfo();
  inputName.value = name;
  inputTitle.value = title;
  editProfileValidator.resetValidation();
  editProfilePopup.open();
});
