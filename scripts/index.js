import Card from "./Card.js";
import { openPopup, closePopup } from "./utils.js";
import FormValidator from "./FromValidator.js";
export { popupImage, popupDescriptionImage, openImagePopup };

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const pageSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profilePopup = document.querySelector(".popup_profile_adder");
const cardPopup = document.querySelector(".popup_card_publisher");
const plusProfileButton = document.querySelector(".profile__plus");
const profileForm = profilePopup.querySelector(".popup__form");
const editProfileButton = document.querySelector(".profile__edit");
const closeProfilePopupButton = profilePopup.querySelector(".popup__close");
const closeCardPopupButton = cardPopup.querySelector(".popup__close_second");
const profileName = document.querySelector(".profile__author");
const profileText = document.querySelector(".profile__text");
const currentName = profilePopup.querySelector(".popup__input-name");
const aboutMe = profilePopup.querySelector(".popup__input-about");
const newCardLink = document.querySelector(".popup__input-link");
const newCardTitle = document.querySelector(".popup__input-description");
const cardForm = document.querySelector(".popup__form_second");
const closeImagePopupButton = document.querySelector(".popup__close_image");
const popupImage = document.querySelector(".popup__image");
const popupDescriptionImage = document.querySelector(".popup__description");
const imagePopup = document.querySelector(".popup_big_image");
const elementList = document.querySelector(".elements__list");

const cardFormValidator = new FormValidator(pageSettings, cardForm);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(pageSettings, profileForm);
profileFormValidator.enableValidation();

function createNewCard(item) {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();
  return cardElement;
}

const renderCard = (cardPropsObject) => {
  const card = createNewCard(cardPropsObject);
  elementList.prepend(card);
};

function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const newCardObject = {
    link: newCardLink.value,
    name: newCardTitle.value,
  };
  renderCard(newCardObject);
  closeCardPopup();
  cardForm.reset();
}

initialCards.forEach((item) => {
  const cardElement = createNewCard(item);
  elementList.append(cardElement);
});

function fillProfileInfo() {
  currentName.value = profileName.textContent;
  aboutMe.value = profileText.textContent;
}

function handleSubmitButton(e) {
  e.preventDefault();
  profileName.textContent = currentName.value;
  profileText.textContent = aboutMe.value;
  closeProfilePopup();
  profileForm.reset();
}

function openAddCardPopup() {
  openPopup(cardPopup);
}

function openProfilePopup() {
  openPopup(profilePopup);
  fillProfileInfo();
}

function openImagePopup() {
  openPopup(imagePopup);
}

function closeCardPopup() {
  closePopup(cardPopup);
}

function closeProfilePopup() {
  closePopup(profilePopup);
}

function closeImagePopup() {
  closePopup(imagePopup);
}

editProfileButton.addEventListener("click", () => {
  profileFormValidator.resetValidation(profileForm);
  openProfilePopup();
});

plusProfileButton.addEventListener("click", () => {
  cardFormValidator.resetValidation(cardForm);
  openAddCardPopup();
});

closeImagePopupButton.addEventListener("click", closeImagePopup);
closeProfilePopupButton.addEventListener("click", closeProfilePopup);
closeCardPopupButton.addEventListener("click", closeCardPopup);
profileForm.addEventListener("submit", handleSubmitButton);
cardForm.addEventListener("submit", handleAddCardFormSubmit);
