import { enlarge } from "./utils.js";

class Card {
  constructor(cardData, templateElement) {
    // the text and the image are private fields,
    // they're only needed inside the class
    this._name = cardData.name;
    this._link = cardData.link;
    this._alt = cardData.name;
    this._templateElement = templateElement;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".grid__card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    //like
    this._templateElement
      .querySelector(".grid__heart")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("grid__heart_active");
      });

    //delete
    this._templateElement
      .querySelector(".grid__btn_del")
      .addEventListener("click", function (evt) {
        const item = evt.target.closest(".grid__card");
        item.remove();
      });
  }

  generateCard() {
    this._templateElement = this._getTemplate();
    this._setEventListeners();
    enlarge(this._templateElement);
    this._templateElement.querySelector(
      ".grid__caption"
    ).textContent = this._name;
    this._templateElement.querySelector(".grid__image").src = this._link;
    this._templateElement.querySelector(".grid__image").alt = this._alt;
    enlarge(this._templateElement);

    return this._templateElement;
  }
}
export default Card;
