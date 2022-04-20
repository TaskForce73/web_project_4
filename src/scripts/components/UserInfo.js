export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, avatarSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._profileName.textContent = name;
    this._profileJob.textContent = about;
  }

  getUserAvatar() {
    return {
      avatar: this._avatar.src,
    };
  }

  setUserAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}

