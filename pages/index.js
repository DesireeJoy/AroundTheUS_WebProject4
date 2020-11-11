let popUp = document.querySelector(".popup");
popUp.classList.add("popup__view-hidden");

function editProfile() {
  popUp.classList.add("popup__view-visible");
  popUp.classList.remove("popup__view-hidden");
}
function closeEdit() {
  popUp.classList.remove("popup__view-visible");
  popUp.classList.add("popup__view-hidden");
}

// Let's find the form in the DOM
let popUp2 = document.querySelector(".popup__form");
let formElement = popUp2.querySelector(".popup__form-selector");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler(evt) {
  evt.preventDefault();
  // This line stops the browser from submitting the form in the default way.
  // Having done so, we can define our own way of submitting the form.
  // We'll explain it in more detail later.

  // Let's find the form fields in the DOM // Get the corresponding Value
  let newName = document.querySelector(".popup__name").value; // Use querySelector()
  let newTitle = document.querySelector(".popup__title").value; // Use querySelector()

  // Insert new values using the textContent property of the
  // querySelector() method
  document.querySelector(".profile__name-span").textContent = newName;
  document.querySelector(".profile__title").textContent = newTitle;
  popUp.classList.remove(".popup__view-visible");
  popUp.classList.remove("popup__view-visible");
  popUp.classList.add("popup__view-hidden");
}
let nameField = document.querySelector(".profile__name-span").value;
let titleField = document.querySelector(".profile__title").value;
let updateName = document.querySelector(".popup__name");
let updateTitle = document.querySelector(".popup__title");

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", formSubmitHandler);
