"use strict";
// Let's set all the constant we need
const userForm = document.querySelector(".popup__form");
const cardForm = document.querySelector(".popup__card_form");
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

initialCards.forEach((element) => {
  const cardElement = cardTemplate.cloneNode(true);
  const newName = element.name;
  const newImg = element.link;
  const newAlt = element.alt;
  const cloneName = cardElement.querySelector(".grid__caption");
  const cloneImage = cardElement.querySelector(".grid__image");
  cloneName.innerHTML = newName;
  cloneImage.src = newImg;
  cloneImage.alt = newName;

  addCardToDom(cardElement);
});

function addCard(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  //Form Values
  const inputPlace = document.querySelector("#inputPlace");
  const inputUrl = document.querySelector("#inputFile");

  const cardTemplate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemplate.cloneNode(true);

  const cloneName = cardElement.querySelector(".grid__caption");
  const cloneImage = cardElement.querySelector(".grid__image");

  cloneName.innerHTML = inputPlace.value;
  cloneImage.src = inputUrl.value;

  addCardToDom(cardElement);
  popUpCard.classList.remove("popup_visible");
}

//Show and Hide all Modal Windows
function openPopUp(evt) {
  //Place current Profile Input in Fields

  if (evt.target.name == "edit_btn") {
    inputName.value = currentName.textContent;
    inputTitle.value = currentTitle.textContent;
    popUpProfile.classList.add("popup_visible");
  }
  if (evt.target.name == "add_btn") {
    popUpCard.classList.add("popup_visible");
  }
}

function closePopUp(evt) {
  if (evt.target.name === "close_card") {
    popUpCard.classList.remove("popup_visible");
  }
  if (evt.target.name === "close_profile") {
    popUpProfile.classList.remove("popup_visible");
  }
}
// Next is the form submit handler, though
// it won't submit anywhere just yet

function userFormSubmitHandler(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  // Insert new values using the textContent property of the
  // querySelector() method
  currentName.textContent = inputName.value;
  currentTitle.textContent = inputTitle.value;
  popUpProfile.classList.remove("popup_visible");
}

//FUNCTIONS FOR ALL PLACE CARDS

//Function for Enlarge Callback
function enlarge(ele) {
  const popupImageBlock = document.querySelector(".popup__image");

  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      popupImageBlock.classList.add("popup_visible");

      const popupImage = popupImageBlock.querySelector(".grid__image_active");
      popupImage.src = pic.target.src;

      const popupCaption = popupImageBlock.querySelector(".popup__image_capt");
      const newCaption = pic.target;

      popupCaption.innerHTML = pic.target.alt;

      console.log(newCaption);

      const closeImage = popupImageBlock.querySelector(".popup__image_close");
      closeImage.addEventListener("click", function (evt) {
        popupImageBlock.classList.remove("popup_visible");
      });
    });
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

function addCardToDom(cardElement) {
  //Like Callback
  likePlace(cardElement);

  //Enlarge Callback
  enlarge(cardElement);

  //Delete Callback
  deletePlace(cardElement);

  gridList.prepend(cardElement);
}

// Connect the handler to the form:
// it will watch the submit event

userForm.addEventListener("submit", userFormSubmitHandler);

addBtn.addEventListener("click", openPopUp);
editBtn.addEventListener("click", openPopUp);
userForm.querySelector(".popup__close").addEventListener("click", closePopUp);
cardForm.querySelector(".popup__close").addEventListener("click", closePopUp);
popUpCard.addEventListener("submit", addCard);
