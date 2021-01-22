class Card {
  constructor(cardData, templateElement, handleCardImgClick) {
    // the text and the image are private fields,
    // they're only needed inside the class
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateElement = templateElement;
    this._handleCardImgClick = handleCardImgClick;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateElement)
      .content.querySelector(".grid__card");
    return cardElement;
  }

  _handleLike(evt) {
    evt.target.classList.toggle("grid__heart_active");
  }

  _setEventListeners() {
    //Search for Elements
    this._cardElement
      .querySelector(".grid__heart")
      .addEventListener("click", () => this._handleLikeIcon());
    this._cardElement
      .querySelector(".grid__btn_del")
      .addEventListener("click", (e) => {
        e.target.closest(".grid__card").remove();
      });

    this._cardElement
      .querySelector(".grid__image")
      .addEventListener("click", () =>
        this._handleCardImgClick(this._link, this._text)
      );
  }
  _handleLikeIcon() {
    this._cardElement
      .querySelector(".grid__heart")
      .classList.toggle("grid__heart_active");
  }
  _handleDeleteCard() {
    this.remove;
  }
  generateCard() {
    this._cardElement = this._getTemplate().cloneNode(true);
    this._cardElement.querySelector(".grid__caption").textContent = this._name;
    this._cardImage = this._cardElement.querySelector(".grid__image");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
export default Card;
