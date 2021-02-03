class UserInfo {
  constructor({ nameSelector, titleSelector, myId }) {
    this._nameEl = document.querySelector(nameSelector);
    this._titleEl = document.querySelector(titleSelector);
    this._myId = myId;
  }

  getUserInfo() {
    const name = this._nameEl.textContent;
    const title = this._titleEl.textContent;
    this._userInfos = { name, title };
    return this._userInfos;
  }

  setUserInfo(elements) {
    this._nameEl.textContent = elements.name;
    this._titleEl.textContent = elements.about;
  }
}

export default UserInfo;
