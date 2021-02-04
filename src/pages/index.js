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
  addPopup,
  avEditBtn,
  avatarForm,
  delPopup,
  avatarPopup,
  edProfPopup,
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

function handleLoad(isLoading, popup, text) {
  if (isLoading) {
    popup.querySelector(".form__submit").textContent = text;
  } else {
    popup.querySelector(".form__submit").textContent = text;
  }
}

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

function createNewCard(cardData, myId) {
  const newCard = new Card({
    cardData,
    templateElement: "#cardTemplate",
    handleCardImgClick: () => {
      imagePopup.open(cardData.link, cardData.name);
    },
    handleDeleteClick: (cardId) => {
      deletePopup.open();
      deletePopup.replSubmitHandler(() => {
        //remove the card
        handleLoad(true, delPopup, "Deleting...");
        api
          .removeCard(cardId)
          .then(() => {
            newCard.deleteCard();
            deletePopup.close();
            handleLoad(true, delPopup, "Yes");
          })
          .catch((err) => console.log("Error! " + err));
      });
    },
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
  return cardElement;
}

api.getInitialCards().then((res) => {
  const initialCardList = new Section(
    {
      items: res,
      renderer: (cardData) => {
        const cardEl = createNewCard(cardData, myId);
        initialCardList.addItem(cardEl);
      },
    },
    ".grid__list"
  );
  initialCardList.renderItems();

  const addCardPopup = new PopupWithForm(".popup__card", (values) => {
    handleLoad(true, addPopup, "Creating...");
    const cardData = {
      name: values.placeName,
      link: values.placeFileName,
    };
    api
      .addCard(cardData)
      .then((res) => {
        const cardEl2 = createNewCard(res, myId);
        initialCardList.addItem(cardEl2);
      })
      .catch((err) => console.log("Error!" + err));

    addCardPopup.close();
    handleLoad(false, addPopup, "Create");
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
  handleLoad(true, edProfPopup, "Saving...");

  userInfo.setUserInfo({ name: inputName.value, about: inputTitle.value });
  api
    .setUserInfo({
      name: inputName.value,
      about: inputTitle.value,
    })
    .then((res) => {
      userInfo.setUserInfo({ name: res.name, about: res.about });
      editProfilePopup.close();
      handleLoad(true, edProfPopup, "Save");
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

const avPopup = new PopupWithForm(".popup__avatar", (data) => {
  handleLoad(true, avatarPopup, "Saving...");
  api
    .setAvatar({
      avatar: data.link,
    })
    .then((res) => {
      userInfo.changeAvatar(res.avatar);
      avPopup.close();
    })
    .catch((err) => console.log("Error! " + err));
});

avPopup.setEventListeners();
avEditBtn.addEventListener("click", () => {
  avatarFormValidator.resetValidation();
  avPopup.open();
  handleLoad(false, avatarPopup, "Save");
});
