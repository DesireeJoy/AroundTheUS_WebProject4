"use strict";
import { enlarge } from "./utils.js";
import Card from "./card.js";

const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");
const currentName = document.querySelector(".profile__name");
const currentTitle = document.querySelector(".profile__title");
const cardTemplate = document.querySelector("#cardTemplate").content;
const gridList = document.querySelector(".grid__list");
const popUpProfile = document.querySelector(".popup");
const popUpCard = document.querySelector(".popup__card");
const popupImageBlock = document.querySelector(".popup__image");
const closeImage = popupImageBlock.querySelector(".popup__image_close"); \ const inputPlace = document.querySelector("#inputPlace");
const inputUrl = document.querySelector("#inputFile");

const profileForm = document.forms.profileForm;
const name = profileForm.elements.profileName;
const title = profileForm.elements.profileTitle;
const addForm = document.forms.addForm;
const placeName = addForm.elements.placeName;
const fileName = addForm.elements.placeFileName;
const addButton = addForm.elements.create_btn;
const submitPlaceBtn = addForm.elements.addFormSubmit;
const formList = document.forms;

//Create Initial Cards
initialCards.forEach((cardData) => {
  const thisCard = new Card(cardData, "#cardTemplate");
  const cardElement = thisCard.generateCard();
  gridList.prepend(cardElement);
});

//Accepts Submit Event for Adding a New Card
function handleCardFormSubmit(evt) {
  const cardData = {
    name: inputPlace.value,
    link: inputUrl.value,
    alt: inputPlace.value,
  };
  const newCard = new Card(cardData, "#cardTemplate");
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  //Form Values
  const cardElement = newCard.generateCard();
  closePopUp(cardElement); //
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
  closePopUp(popUpProfile); //
}

//FUNCTIONS FOR ALL PLACE CARDS

//Show and Hide all Modal Windows
function openPopUp(popUpSelect) {
  popUpSelect.classList.add("popup_visible");
  document.addEventListener("keydown", closeWithEsc, false);
}

//Closes Modal Window
function closePopUp(popUpSelect) {
  popUpSelect.classList.remove("popup_visible");
  document.removeEventListener("keydown", closeWithEsc, false);
}

// Function for Like Callback
function likePlace(ele) {
  ele.querySelector(".grid__heart").addEventListener("click", function (evt) {
    evt.target.classList.toggle("grid__heart_active");
  });
}

// Function for Delete Callback
function deletePlace(ele) {
  ele.querySelector(".grid__btn_del").addEventListener("click", function (evt) {
    const item = evt.target.closest(".grid__card");
    item.remove();
  });
}

// Connect the handler to the form:
// it will watch the submit event

// Open Popups

profileForm.addEventListener("submit", handleUserFormSubmit);
popUpCard.addEventListener("submit", handleCardFormSubmit);
addBtn.addEventListener("click", () => {
  openPopUp(popUpCard);
  resetSubmitBtn();
});

editBtn.addEventListener("click", () => {
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
  openPopUp(popUpProfile);
});

function closeWithEsc(evt, popUpSelect) {
  if (evt.key === "Escape") {
    const findCurrent = document.querySelector(".popup_visible");
    closePopUp(findCurrent);
  }
}

// Close Popups
profileForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpProfile);
});

addForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpCard);
});
closeImage.addEventListener("click", function (evt) {
  closePopUp(popupImageBlock);
});

popUpCard.addEventListener("click", (evt) => {
  if (evt.target === popUpCard) {
    closePopUp(popUpCard);
  }
});

popUpProfile.addEventListener("click", (evt) => {
  if (evt.target === popUpProfile) {
    closePopUp(popUpProfile);
  }
});

popupImageBlock.addEventListener("click", (evt) => {
  if (evt.target === popupImageBlock) {
    closePopUp(popupImageBlock);
  }
});
