import "../pages/index.css";
import Card from "../scripts/components/Card";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import UserInfo from "../scripts/components/UserInfo";
import Section from "../scripts/components/Section";
import FormValidator from "../scripts/components/FromValidator";
import {
  initialCards,
  pageSettings,
  plusProfileButton,
  profileForm,
  editProfileButton,
  cardForm,
  elementList,
} from "../scripts/utils/constants";

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
    renderer: (data) => {
      renderCard(data);
    },
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

editProfileButton.addEventListener("click", () => {
  profileFormValidator.resetValidation(profileForm);
  editModal.open();
});

plusProfileButton.addEventListener("click", () => {
  cardFormValidator.resetValidation(cardForm);
  addCardModal.open();
});
