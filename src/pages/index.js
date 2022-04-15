import "../pages/index.css";
import Card from "../scripts/components/Card";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithForm from "../scripts/components/PopupWithForm";
import UserInfo from "../scripts/components/UserInfo";
import Section from "../scripts/components/Section";
import FormValidator from "../scripts/components/FromValidator";
import PopupWithSubmit from "../scripts/components/PopupWithSubmit";
import Api from "../scripts/components/Api";
import { pageSettings } from "../scripts/utils/constants";

const plusProfileButton = document.querySelector(".profile__plus");
const profileForm = document.querySelector(".popup__form");
const editProfileButton = document.querySelector(".profile__edit");
const cardForm = document.querySelector(".popup__form_second");
const elementList = document.querySelector(".elements__list");
const profileInputName = document.querySelector(".popup__input-name");
const profileInputAbout = document.querySelector(".popup__input-about");
const editAvatarButton = document.querySelector(".profile__overlay");
const avatarForm = document.querySelector(".popup__form_avatar");
let id;

import headerSrc from "../images/header.svg";
const headerImage = document.getElementById("around-the-us");
headerImage.src = headerSrc;

import profileSrc from "../images/Cousteau.png";
const profileImage = document.getElementById("profile-image");
profileImage.src = profileSrc;

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "32b9efa0-6f35-4afe-975e-e3a6be43cfcb",
    "Content-Type": "application/json",
  },
});

const cardFormValidator = new FormValidator(pageSettings, cardForm);
cardFormValidator.enableValidation();

const profileFormValidator = new FormValidator(pageSettings, profileForm);
profileFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(pageSettings, avatarForm);
avatarFormValidator.enableValidation();

const confirmModal = new PopupWithSubmit(".popup_card_remover");
confirmModal.setEventListeners();

const imageModal = new PopupWithImage(".popup_big_image");
imageModal.setEventListeners();

const editModal = new PopupWithForm(".popup_profile_adder", (data) => {
  userInfo.setUserInfo(data);
});
editModal.setEventListeners();

const avatarEditModal = new PopupWithForm(".popup_profile_changer", (data) => {
  api
    .changeAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar({ avatar: res.avatar });
    })
    .catch((err) => console.log(err));
});
avatarEditModal.setEventListeners();

const addCardModal = new PopupWithForm(".popup_card_publisher", (data) => {
  api.createCard({ name: data.description, link: data.link }).then((res) => {
    renderCard(res);
  });
});
addCardModal.setEventListeners();

const renderCard = (data) => {
  const card = createNewCard(data);
  elementList.prepend(card);
};

api.getUserInfo().then((res) => {
  id = res._id;
  userInfo.setUserInfo({ name: res.name, about: res.about });
});

api.getInitialCards().then((res) => {
  const section = new Section(
    {
      items: res,
      renderer: renderCard,
    },
    ".elements__list"
  );
  section.render();
});

const userInfo = new UserInfo({
  profileNameSelector: ".profile__author",
  profileJobSelector: ".profile__text",
  avatarSelector: ".profile__image",
});

function createNewCard(data) {
  const card = new Card(
    {
      data,
      handleCardClick: (name, link) => {
        imageModal.open(name, link);
      },
      handleDeleteButton: (id) => {
        confirmModal.open(id);
        confirmModal.setAction(() => {
          api.deleteCard(id).then(() => {
            card.removeCard();
          });
        });
      },
      handleLikeButton: (likeButton, id) => {
        if (likeButton.classList.contains("element__button_active")) {
          api
            .dislikeCard(id)
            .then((res) => {
              card.displayTotalLikes(res.likes.length);
              card.toggleLikeButton(likeButton);
            })
            .catch((err) => console.log(err));
        } else {
          api
            .likeCard(id)
            .then((res) => {
              card.displayTotalLikes(res.likes.length);
              card.toggleLikeButton(likeButton);
            })
            .catch((err) => console.log(err));
        }
      },
    },
    id,
    "#card-template"
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

editAvatarButton.addEventListener("click", () => {
  avatarFormValidator.resetValidation(avatarForm);
  avatarEditModal.open();
});
