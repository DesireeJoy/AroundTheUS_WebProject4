"use strict";
// Let's set all the constant we need

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
const popupImage = popupImageBlock.querySelector(".grid__image_active");
const popupCaption = popupImageBlock.querySelector(".popup__image_capt");
const closeImage = popupImageBlock.querySelector(".popup__image_close");

const profileForm = document.forms.profileForm;
const name = profileForm.elements.profileName;
const title = profileForm.elements.profileTitle;
const addForm = document.forms.addForm;
const placeName = addForm.elements.placeName;
const fileName = addForm.elements.placeFileName;
const addButton = addForm.elements.create_btn;

const formList = document.forms;

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
  resetCardForm();
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
  //Like Callback
  likePlace(cardElement);

  //Enlarge Callback
  enlarge(cardElement);

  //Delete Callback
  deletePlace(cardElement);
  return cardElement;
}

// Add the Created Card to the Dom

function addCardToDom(cardElement) {
  gridList.prepend(cardElement);
}

// Reset the Form
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

//Function for Enlarge Callback
function enlarge(ele) {
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      openPopUp(popupImageBlock);
      popupImage.src = pic.target.src;
      popupCaption.innerHTML = pic.target.alt;
    });
}

//Show and Hide all Modal Windows
function openPopUp(popUpSelect) {
  popUpSelect.classList.add("popup_visible");
  const submitBtn = popUpSelect.querySelector(".form__submit");
  console.log(submitBtn);
  submitBtn.classList.add("popup__card_submit-disabled");
  submitBtn.disabled = true;
}

//Closes Modal Window
function closePopUp(popUpSelect) {
  popUpSelect.classList.remove("popup_visible");
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
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopUp(popUpCard);
    }
  });
});

editBtn.addEventListener("click", () => {
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
  openPopUp(popUpProfile);
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopUp(popUpProfile);
    }
  });
});

// Close Popups
profileForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpProfile);

  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopUp(popUpProfile);
    }
  });
});
addForm.querySelector(".popup__close").addEventListener("click", () => {
  closePopUp(popUpCard);
  document.removeEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      closePopUp(popUpCard);
    }
  });
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
