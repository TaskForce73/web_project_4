import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this.handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
  }
  _getInputValues() {
    const inputVallues = {};
    const inputs = [...this._form.querySelectorAll(".popup__input")];
    inputs.forEach((input) => {
      inputVallues[input.name] = input.value;
    });
    return inputVallues;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.handleSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    super.close();
  }
}
