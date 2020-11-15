let popUp = document.querySelector(".popup");

// Let's find the elements we need
let form = document.querySelector(".popup__form");
let closeElement = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__editbtn");
let Name = document.querySelector("#inputName");
let Title = document.querySelector("#inputTitle");
let currentName = document.querySelector(".profile__name");
let currentTitle = document.querySelector(".profile__title");

//Show and Hide
function openProfilePopup() {
  popUp.classList.add("popup_visible");

  //Place current Profile Input in Fields
  Name.value = Name.value;
  Title.value = Title.value;
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
  currentName.textContent = Name.value;
  currentTitle.textContent = Title.value;
  popUp.classList.remove("popup_visible");
}

// Connect the handler to the form:
// it will watch the submit event

form.addEventListener("submit", formSubmitHandler);
closeElement.addEventListener("click", closeProfilePopup);
editBtn.addEventListener("click", openProfilePopup);
