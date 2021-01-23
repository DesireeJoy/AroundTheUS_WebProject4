class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameEl = document.querySelector(".profile__name");
    this._titleEl = document.querySelector(".profile__title");
  }

  getUserInfo() {
    const name = this._nameEl.textContent;
    const about = this._titleEl.textContent;
    this._userInfos = { name, about };
    return this._userInfos;
  }

  setUserInfo(elements) {
    this._nameEl.textContent = elements.name;
    this._titleEl.textContent = elements.about;
  }
}

export default UserInfo;
