export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteButton, handleLikeButton },
    userId,
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._likes = data.likes;
  }

  _getTemplate = () => {
    this._element = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return this._element;
  };

  removeCard = () => {
    const card = this._element;
    card.remove();
    this._element = null;
  };

  likeCard(newLikes) {
    this._likes = newLikes;
    this._element.querySelector(".element__button-counter").textContent =
      this._likes.length;
    this._element
      .querySelector(".element__button")
      .classList.toggle("element__button_active");
  }

  isLiked() {
    return this._likes.some((person) => person._id === this._userId);
  }

  _setEventListeners = () => {
    this._elementBin = this._element.querySelector(".element__bin");
    this._elementBin.addEventListener("click", () => {
      this._handleDeleteButton(this._id);
    });
    this._likeButton = this._element.querySelector(".element__button");
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton(this._id);
    });
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
    if (this._ownerId !== this._userId) {
      this._elementBin = this._element.querySelector(
        ".element__bin"
      ).style.display = "none";
    }
    this._element.querySelector(".element__button-counter").textContent =
      this._likes.length;

    if (this.isLiked) {
      this.likeCard(this._likes);
    }

    return this._element;
  };
}
