import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
  setAction(action) {
    this._submitHandler = action;
  }

  setEventListeners() {
    this._form = this._popup.querySelector(".popup__form");
    this._popup.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._form);
    });
    super.setEventListeners();
  }
}
