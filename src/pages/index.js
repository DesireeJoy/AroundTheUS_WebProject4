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
  avatarPopup,
  avEditBtn,
  avatarForm,
} from "../scripts/constants.js";
import Popup from "../components/Popup.js";
let myId;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-8",
  headers: {
    authorization: "d687320c-42a6-463a-9f18-8c281b207460",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  titleSelector: ".profile__title",
  avatarSelector: ".profile__avatar",
});

api.getAllInfo().then(([userData, initialCardData]) => {
  myId = userData._id;
  userInfo.setUserInfo({ name: userData.name, about: userData.about });
  userInfo.changeAvatar(userData.avatar);
});
api.getUserInfo().then((res) => {
  userInfo.setUserInfo({
    name: res.name,
    about: res.about,
    avatar: res.avatar,
  });
  myId = res._id;
});

const deletePopup = new PopupWithForm(".popup__delete", (values) => {
  console.log(values);
});
deletePopup.setEventListeners();

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
            deletePopup.open();
            deletePopup.setSubmitHandler(() => {
              //remove the card
              api
                .removeCard(cardId)
                .then(() => {
                  card.deleteCard();
                  deleteConfirmPopup.close();
                })
                .catch((err) => console.log("Error! " + err));
            });
            // api.removeCard(cardId).then(() => {
            //   newCard.deleteCard();
          },
          // handleDeleteClick
          handleLikes: (cardId) => {
            if (newCard.isLiked(myId)) {
              api
                .changeLikeCardStatus(cardId, true)
                .then((res) => {
                  newCard.getLikeCount(res.likes.length);
                })
                .then(() => {
                  newCard.dislikeCard();
                })
                .catch((err) => console.log("Error! " + err));
            } else {
              console.log(newCard.isLiked());
              api
                .changeLikeCardStatus(cardId, false)
                .then((res) => {
                  newCard.getLikeCount(res.likes.length);
                })
                .then(() => {
                  newCard.likeCard();
                })
                .catch((err) => console.log("Error! " + err));
            }
          },
          myId,
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
          deleteConfirmPopup.open(cardId);
          deleteConfirmPopup.setSubmitHandler(() => {
            api.removeCard(cardId).then(() => {
              newCard.deleteCard();
            });
          });
        },
        handleLikes: (cardId) => {
          if (card.isLiked()) {
            api
              .changeLikeCardStatus(cardId, true)
              .then((res) => {
                card.getLikeCount(res.likes.length);
              })
              .then(() => {
                card.dislikeCard();
              })
              .catch((err) => console.log("Error! " + err));
          } else {
            api
              .changeLikeCardStatus(cardId, false)
              .then((res) => {
                card.getLikeCount(res.likes.length);
              })
              .then(() => {
                card.likeCard();
              })
              .catch((err) => console.log("Error! " + err));
          }
        },
        myId,
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

//Create Form Validation
const editProfileValidator = new FormValidator(config, editProfileForm);
const addCardValidator = new FormValidator(config, addCardForm);
const avatarFormValidator = new FormValidator(config, avatarForm);

//Fire em up
editProfileValidator.enableValidation();
addCardValidator.enableValidation();
avatarFormValidator.enableValidation();

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

//FIgure out why Data comes into the other forms but not this
const avPopup = new PopupWithForm(".popup__avatar", (data) => {
  api
    .setAvatar({
      avatar: data.link,
    })
    .then((res) => {
      console.log(res.avatar);
      userInfo.changeAvatar(res.avatar);
      avPopup.close();
    })
    .catch((err) => console.log("Error! " + err));
});

avPopup.setEventListeners();
avEditBtn.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avPopup.open();
});
