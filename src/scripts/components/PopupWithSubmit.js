import Popup from "./Popup";

export default class PopupWithSubmit extends Popup {
setAction(action) {
this._submitHandler = action;
this._form = this._popup.querySelector(".popup__form");
}

setEventListeners() {
    this._popup.addEventListener("submit", (e) => {
      e.preventDefault();
      this._submitHandler(this._form);
      this.close();
    });
    super.setEventListeners();
  }
}