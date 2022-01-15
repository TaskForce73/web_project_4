let popup = document.querySelector('.popup');
let popupContainer = popup.querySelector('.popup__container');
let editProfileButton = document.querySelector('.profile__edit');
let popupClose = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__author');
let profileText = document.querySelector(".profile__text");
let currentName = popup.querySelector('.current-name');
let aboutMe = popup.querySelector('.about-me');
function getProfileInfo() {
  currentName.value = profileName.textContent;
    aboutMe.value = profileText.textContent;
  }
  function openPopup() {
    popup.classList.add('popup_open');
    getProfileInfo();
  }
  editProfileButton.addEventListener('click', openPopup);

  function closePopup() {
    popup.classList.remove('popup_open');
  }
  
  popupClose.addEventListener('click', closePopup);
  
  function handleSubmitButton(e) {
    e.preventDefault();
    profileName.textContent = currentName.value;
    profileText.textContent = aboutMe.value ;
    closePopup();
  }
  
  popupContainer.addEventListener('submit', handleSubmitButton);