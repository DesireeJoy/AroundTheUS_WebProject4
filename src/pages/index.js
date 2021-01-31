"use strict";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "d687320c-42a6-463a-9f18-8c281b207460",
    "Content-Type": "application/json",
  },
});

api.getInitialCards().then((res) => {
  const initialCardList = new Section(
    {
      items: res,
      renderer: (cardData) => {
        const newCard = new Card({
          cardData,
          templateElement: "#cardTemplate",
          handleCardImgClick: () => {
            imagePopup.open(cardData.link, cardData.name);
          },
          handleDeleteClick: (cardId) => {
            api.removeCard(cardId).then(() => {
              newCard.deleteCard();
            });
          },
          // handleDeleteClick
          // handleLikes,
          // myId
        });
        const cardElement = newCard.generateCard();
        initialCardList.addItem(cardElement);
      },
    },
    ".grid__list"
  );
  initialCardList.renderItems();

  const addCardPopup = new PopupWithForm(".popup__card", (values) => {
    const cardData = { name: values.placeName, link: values.placeFileName };
    api.addCard(cardData).then((res) => {
      const newCard = new Card({
        cardData,
        templateElement: "#cardTemplate",
        handleCardImgClick: () => {
          imagePopup.open(cardData.link, cardData.name);
        },
        handleDeleteClick: (cardId) => {
          api.removeCard(cardId).then(() => {
            newCard.deleteCard();
          });
        },
        // handleDeleteClick
        // handleLikes,
        // myId
      });
      const cardElement = newCard.generateCard();

      initialCardList.addItem(cardElement);
    });
    addCardPopup.close();
  });
  addCardPopup.setEventListeners();
  addBtn.addEventListener("click", () => {
    addCardValidator.resetValidation();
    addCardPopup.open();
  });
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__title",
});

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({ name: res.name, about: res.about });
});

//Create Form Validation
const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();

const imagePopup = new PopupWithImage(".popup__image");
imagePopup.setEventListeners();

const editProfilePopup = new PopupWithForm(".popup_edit", () => {
  userInfo.setUserInfo({ name: inputName.value, about: inputTitle.value });
  api
    .setUserInfo({
      name: inputName.value,
      about: inputTitle.value,
    })
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about });
      editProfilePopup.close();
    })
    .catch((err) => console.log("Error! " + err));
  editProfilePopup.close();
});

editProfilePopup.setEventListeners();

editBtn.addEventListener("click", () => {
  const { name, title } = userInfo.getUserInfo();
  inputName.value = name;
  inputTitle.value = title;
  editProfileValidator.resetValidation();
  editProfilePopup.open();
});
