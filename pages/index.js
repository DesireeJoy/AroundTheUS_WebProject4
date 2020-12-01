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

//Create Initial Cards
initialCards.forEach((element) => {
  const cardElement = createCard(element);
  addCardToDom(cardElement);
});

//Accepts Submit Event for Adding a New Card
function handleCardFormSubmit(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  //Form Values
  const inputPlace = document.querySelector("#inputPlace");
  const inputUrl = document.querySelector("#inputFile");

  //Store Card Information
  const cardElement = createCard({
    name: inputPlace.value,
    link: inputUrl.value,
    alt: inputPlace.value,
  });

  addCardToDom(cardElement);
  closePopUp(popUpCard); //
}

// Create the Card for adding to the Dom

function createCard(cardDatum) {
  const cardTemplate = document.querySelector("#cardTemplate").content;
  const cardElement = cardTemplate.cloneNode(true);
  const cloneName = cardElement.querySelector(".grid__caption");
  const cloneImage = cardElement.querySelector(".grid__image");
  cloneName.textContent = cardDatum.name;
  cloneImage.src = cardDatum.link;
  cloneImage.alt = cardDatum.alt;
  return cardElement;
}

// Add the Created Card to the Dom

function addCardToDom(cardElement) {
  //Like Callback
  likePlace(cardElement);

  //Enlarge Callback
  enlarge(cardElement);

  //Delete Callback
  deletePlace(cardElement);

  gridList.prepend(cardElement);
}

//Show and Hide all Modal Windows
function openPopUp(thisElement) {
  thisElement.classList.add("popup_visible");
}

function userFormSubmitHandler(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  // Insert new values using the textContent property of the
  // querySelector() method
  currentName.textContent = inputName.value;
  currentTitle.textContent = inputTitle.value;
  closePopUp(popUpProfile); //
}

//Closes Modal Window
function closePopUp(popUpSelect) {
  popUpSelect.classList.remove("popup_visible");
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
        closePopUp(popupImageBlock);
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

// Connect the handler to the form:
// it will watch the submit event

userForm.addEventListener("submit", userFormSubmitHandler);
popUpCard.addEventListener("submit", handleCardFormSubmit);
addBtn.addEventListener("click", () => {
  openPopUp(popUpCard);
});
editBtn.addEventListener("click", () => {
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
  openPopUp(popUpProfile);
});
userForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpProfile);
});
cardForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpCard);
});
