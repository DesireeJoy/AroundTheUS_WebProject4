let popUp = document.querySelector(".popup");

//Initial Array

const initialCards = [
  {
    name: "Ecola State Park",
    link: "/images/EcolaStatePark.jpeg",
  },
  {
    name: "Fontainebleau State Park",
    link: "FontainebleauStatePark.jpeg",
  },
  {
    name: "Governor Dodge State Park",
    link: "GovernorDodgeStatePark.jpeg",
  },
  {
    name: "Hocking Hills State Park",
    link: "HockingHillsStatePark.jpeg",
  },
  {
    name: "Stone Mountain State Park",
    link: "StoneMountainStatePark.jpeg",
  },
  {
    name: "Valley of Fire State Park",
    link: "ValleyofFireStatePark.jpeg",
  },
];

// Let's find the elements we need
const form = document.querySelector(".popup__form");
const closeElement = document.querySelector(".popup__close");
const editBtn = document.querySelector(".profile__editbtn");
const inputName = document.querySelector("#inputName");
const inputTitle = document.querySelector("#inputTitle");
const currentName = document.querySelector(".profile__name");
const currentTitle = document.querySelector(".profile__title");

//Show and Hide
function openProfilePopup() {
  popUp.classList.add("popup_visible");
  //Place current Profile Input in Fields
  inputName.value = currentName.textContent;
  inputTitle.value = currentTitle.textContent;
}

function closeProfilePopup() {
  popUp.classList.remove("popup_visible");
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

// Connect the handler to the form:
// it will watch the submit event

form.addEventListener("submit", formSubmitHandler);
closeElement.addEventListener("click", closeProfilePopup);
editBtn.addEventListener("click", openProfilePopup);
