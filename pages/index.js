//Initial Array

const initialCards = [
  {
    name: "Ecola State Park",
    link: "images/EcolaStatePark.jpeg",
    alt: "Tall trees shrouded in mist on a hillside",
  },
  {
    name: "Fontainebleau State Park",
    link: "images/FontainebleauStatePark.jpeg",
    alt:
      "Orange sunset over a lake with silhouetted black trees in the foreground",
  },
  {
    name: "Governor Dodge State Park",
    link: "images/GovernorDodgeStatePark.jpeg",
    alt:
      "An iced over lake beginning to thaw with trees beginning to grow leaves and a distanct green hill",
  },
  {
    name: "Hocking Hills State Park",
    link: "images/HockingHillsStatePark.jpeg",
    alt:
      "A small waterfall over a rocky outcropping with a sandy forground and a bridge in the background",
  },
  {
    name: "Stone Mountain State Park",
    link: "images/StoneMountainStatePark.jpeg",
    alt:
      "A hiker standing on the edge of an overhang looking out at a mountainside covered in trees and shrouded in dense fog",
  },
  {
    name: "Valley of Fire State Park",
    link: "images/ValleyOfFireStatePark.jpeg",
    alt:
      "an arid orange landscape dotted with short round desert plants with several chimney type rock formations",
  },
];

// Let's set all the constant we need
const form = document.querySelector(".popup__form");
const form2 = document.querySelector(".popup2__form");
const closeElement = document.querySelector(".popup__close");
const closeCard = document.querySelector(".popup2__close");
const editBtn = document.querySelector(".profile__editbtn");
const addBtn = document.querySelector(".profile__addbtn");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");
const currentName = document.querySelector(".profile__name");
const currentTitle = document.querySelector(".profile__title");
const cardTemplate = document.querySelector("#cardTemplate").content;
const gridList = document.querySelector(".grid__list");
const popUpProfile = document.querySelector(".popup");
const popUpCard = document.querySelector(".popup2");

// Add Initial Set of Cards
for (var i = 0; i < initialCards.length; i++) {
  // clone content of template tag for cards
  let cardElement = cardTemplate.cloneNode(true);
  let newName = initialCards[i].name;
  let newImg = initialCards[i].link;
  let newAlt = initialCards[i].alt;
  cloneName = cardElement.querySelector(".grid__caption");
  cloneImage = cardElement.querySelector(".grid__image");
  cloneName.innerHTML = newName;
  cloneImage.src = newImg;
  cloneImage.alt = newAlt;

  //Like Callback
  likePlace(cardElement);

  //enlarge Callback
  enlarge(cardElement);

  //Delete Callback
  deletePlace(cardElement);

  gridList.append(cardElement);
}

//Add new cards

function addCard(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();
  //Form Values
  const inputPlace = document.querySelector("#inputPlace");
  const inputUrl = document.querySelector("#inputFile");

  const cardTemplate = document.querySelector("#cardTemplate").content;
  let cardElement = cardTemplate.cloneNode(true);

  cloneName = cardElement.querySelector(".grid__caption");
  cloneImage = cardElement.querySelector(".grid__image");

  cloneName.innerHTML = inputPlace.value;
  cloneImage.src = inputUrl.value;

  //Like Callback
  likePlace(cardElement);

  //enlarge Callback
  enlarge(cardElement);

  //Delete Callback
  deletePlace(cardElement);

  gridList.append(cardElement);
  closeCardPopup();
}

//Show and Hide
function openProfilePopup() {
  popUpProfile.classList.add("popup_visible");
  //Place current Profile Input in Fields
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
}

function closeProfilePopup() {
  popUpProfile.classList.remove("popup_visible");
}

function openCardPopup() {
  popUpCard.classList.add("popup_visible");
  //Place current Profile Input in Fields
}
function closeCardPopup() {
  popUpCard.classList.remove("popup_visible");
}
// Next is the form submit handler, though
// it won't submit anywhere just yet

function formSubmitHandler(evt) {
  // This line stops the browser from submitting the form in the default way.
  evt.preventDefault();

  // Insert new values using the textContent property of the
  // querySelector() method
  currentName.textContent = inputName.value;
  currentTitle.textContent = inputTitle.value;
  closeProfilePopup();
}

//FUNCTIONS FOR ALL PLACE CARDS

//Function for Enlarge Callback
function enlarge(ele) {
  const picTemplate = document.querySelector("#pictureTemplate").content;
  ele
    .querySelector(".grid__btn_popup")
    .addEventListener("click", function (pic) {
      let picElement = picTemplate.cloneNode(true);
      imgSelector = picElement.querySelector(".grid__image_active");
      imgSelector.src = pic.target.src;
      let popUpCont = picElement.querySelector(".popup3");
      popUpCont.classList.add("popup_visible");
      gridList.append(picElement);
    });
}
function likePlace(ele) {
  ele.querySelector(".grid__heart").addEventListener("click", function (evt) {
    evt.target.classList.toggle("grid__heart_active");
  });
}

function deletePlace(ele) {
  ele.querySelector(".grid__btn_del").addEventListener("click", function (evt) {
    item = evt.target.closest(".grid__card");
    item.remove();
  });
}

// Connect the handler to the form:
// it will watch the submit event

form.addEventListener("submit", formSubmitHandler);
closeElement.addEventListener("click", closeProfilePopup);
editBtn.addEventListener("click", openProfilePopup);
closeCard.addEventListener("click", closeCardPopup);
popUpCard.addEventListener("submit", addCard);
addBtn.addEventListener("click", openCardPopup);
