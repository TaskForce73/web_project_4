export default class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate = () => {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return this._element;
  };

  _handleDeleteButton = () => {
    const card = this._element;
    card.remove();
    this._element = null;
  };

  _handleLikeButton = () => {
    this._likeButton.classList.toggle("element__button_active");
  };

  _setEventListeners = () => {
    this._elementBin = this._element.querySelector(".element__bin");
    this._elementBin.addEventListener("click", () => {
      this._handleDeleteButton();
    });
    this._likeButton.addEventListener("click", this._handleLikeButton);
    this._elementPicture.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  generateCard = () => {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector(".element__button");
    this._elementPicture = this._element.querySelector(".element__picture");
    this._setEventListeners();
    this._elementPicture.src = this._link;
    this._elementPicture.alt = `Photo of ${this._name}`;
    this._element.querySelector(".element__header").textContent = this._name;

    return this._element;
  };
}
