import "../pages/index.css";
import Card from "../scripts/components/Card";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import UserInfo from "../scripts/components/UserInfo";
import Section from "../scripts/components/Section";
import FormValidator from "../scripts/components/FromValidator";
import { initialCards, pageSettings } from "../scripts/utils/constants";

const plusProfileButton = document.querySelector(".profile__plus");
const profileForm = document.querySelector(".popup__form");
const editProfileButton = document.querySelector(".profile__edit");
const cardForm = document.querySelector(".popup__form_second");
const elementList = document.querySelector(".elements__list");
const profileInputName = document.querySelector(".popup__input-name");
const profileInputAbout = document.querySelector(".popup__input-about");

import headerSrc from "../images/header.svg";
const headerImage = document.getElementById("around-the-us");
headerImage.src = headerSrc;

import profileSrc from "../images/Cousteau.png";
const profileImage = document.getElementById("profile-image");
profileImage.src = profileSrc;

const cardFormValidator = new FormValidator(pageSettings, cardForm);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(pageSettings, profileForm);
profileFormValidator.enableValidation();

const imageModal = new PopupWithImage(".popup_big_image");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile_adder", (data) => {
  userInfo.setUserInfo(data);
});
editModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_card_publisher", (data) => {
  const newCardObject = {
    link: data.link,
    name: data.description,
  };
  renderCard(newCardObject);
});
addCardModal.setEventListeners();

const renderCard = (data) => {
  const card = createNewCard(data);
  elementList.prepend(card);
};

const section = new Section(
  {
    items: initialCards.reverse(),
    renderer: renderCard,
  },
  ".elements__list"
);
section.render();

const userInfo = new UserInfo({
  profileNameSelector: ".profile__author",
  profileJobSelector: ".profile__text",
});

function createNewCard(item) {
  const card = new Card(item, "#card-template", (name, link) =>
    imageModal.open(name, link)
  );
  const cardElement = card.generateCard();
  return cardElement;
}

function fillProfileForm() {
  const userData = userInfo.getUserInfo();
  profileInputName.value = userData.name;
  profileInputAbout.value = userData.job;
}

editProfileButton.addEventListener("click", () => {
  profileFormValidator.resetValidation(profileForm);
  fillProfileForm();
  editModal.open();
});

plusProfileButton.addEventListener("click", () => {
  cardFormValidator.resetValidation(cardForm);
  addCardModal.open();
});
