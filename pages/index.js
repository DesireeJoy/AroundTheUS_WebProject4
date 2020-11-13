let popUp = document.querySelector(".popup");

//Show and Hide
function editProfile() {
  popUp.classList.add("popup__view-visible");
}
function closeEdit() {
  popUp.classList.remove("popup__view-visible");
}

// Let's find the form in the DOM
let popUp2 = document.querySelector(".popup__form");
let closeElement = document.querySelector(".popup__close");
let editBtn = document.querySelector(".profile__editbtn");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function formSubmitHandler(evt) {
  evt.preventDefault();
  // This line stops the browser from submitting the form in the default way.

  // Let's find the form fields in the DOM // Get the corresponding Value
  let newName = document.querySelector(".popup__name").value; // Use querySelector()
  let newTitle = document.querySelector(".popup__title").value; // Use querySelector()

  // Insert new values using the textContent property of the
  // querySelector() method
  document.querySelector(".profile__name-span").textContent = newName;
  document.querySelector(".profile__title").textContent = newTitle;
  popUp.classList.remove("popup__view-visible");
}

// Connect the handler to the form:
// it will watch the submit event

popUp2.addEventListener("submit", formSubmitHandler);
closeElement.addEventListener("click", closeEdit);
editBtn.addEventListener("click", editProfile);
