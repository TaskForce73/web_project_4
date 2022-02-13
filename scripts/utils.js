export { openPopup, closePopup };
function openPopup(popup) {
  popup.classList.add("popup_open");
  document.addEventListener("keydown", closePopupWithEsc);
  document.addEventListener("click", closePopupOverlay);
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupWithEsc);
  document.removeEventListener("click", closePopupOverlay);
}

const closePopupWithEsc = (event) => {
  if (event.key === "Escape") {
    const popupOpenClass = document.querySelector(".popup_open");
    closePopup(popupOpenClass);
  }
};

function closePopupOverlay(event) {
  if (event.target.classList.contains("popup_open")) {
    closePopup(event.target);
  }
}
