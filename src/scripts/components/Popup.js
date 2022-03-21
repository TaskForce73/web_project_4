export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }
  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close = () => {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscapeClose);
  };

  setEventListeners() {
    this._popup.addEventListener("mousedown", (e) => {
      if (
        e.target.classList.contains("popup_open") ||
        e.target.classList.contains("popup__close")
      ) {
        this.close();
      }
    });
  }

  _handleEscapeClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };
}
