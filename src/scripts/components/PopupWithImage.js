import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  open(name, link) {
    this._image = this._popup.querySelector(".popup__image");
    this._caption = this._popup.querySelector(".popup__description");
    this._caption.textContent = name;
    this._image.alt = `Photo of ${name}`;
    this._image.src = link;
    super.open();
  }
}
