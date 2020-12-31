import { handlePreviewPic } from "./utils.js";

class Card {
  constructor(cardData, templateElement) {
    // the text and the image are private fields,
    // they're only needed inside the class
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateElement = templateElement;
  }
  _handlePreviewPic() {
    handlePreviewPic(this);
  }

  _handleLike(evt) {
    evt.target.classList.toggle("grid__heart_active");
  }
  _handleDelete(evt) {
    evt.target.closest(".grid__card").remove();
  }

  _setEventListeners() {
    //Search for Elements
    const likeBtn = this._cardElement.querySelector(".grid__heart");
    const delBtn = this._cardElement.querySelector(".grid__btn_del");
    const cardImage = this._cardElement.querySelector(".grid__image");

    //Subscribe to Elements
    likeBtn.addEventListener("click", this._handleLike);
    delBtn.addEventListener("click", this._handleDelete);
    cardImage.addEventListener("click", this._handlePreviewPic);
  }

  generateCard() {
    const cardTemplate = document
      .querySelector(this._templateElement)
      .content.querySelector(".grid__card");

    const cardElement = cardTemplate.cloneNode(true);

    this._cardElement = cardElement;
    this._cardElement.querySelector(".grid__caption").textContent = this._name;
    this._cardElement.querySelector(".grid__image").src = this._link;
    this._cardElement.querySelector(".grid__image").alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
export default Card;
