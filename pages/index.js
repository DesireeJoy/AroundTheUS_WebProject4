let popUp = document.querySelector(".popup");
function editProfile() {
  popUp.style.display = "block";
}
function closeEdit() {
  popUp.style.display = "none";
}

// Let's find the form in the DOM
let popUp2 = document.querySelector(".popup__form");
let formElement = popUp2.querySelector(".popup__form-selector");
console.log(popUp2);

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

  console.log(` Name input is ${newName} Job Input is ${newTitle}`);
  // Select elements where the field values will be entered

  const profileName = document.querySelector(".profile__name-span");
  const profileTitle = document.querySelector(".profile__title");

  // Insert new values using the textContent property of the
  // querySelector() method
  profileName.innerHTML = newName;
  profileTitle.innerHTML = newTitle;
  popUp.style.display = "none";
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener("submit", formSubmitHandler);

console.log(formElement);
