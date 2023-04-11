export default class UserInfo {
  constructor({ userName, userJob, userAvatar, userId }) {
    this._userName = userName;
    this._userJob = userJob;
    this._userId = userId;
    this._userAvatar = userAvatar
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userJob: this._userJob.textContent,
    };
  }

  setUserInfo(data) {
    const {userName, userJob} = data
    this._userName.textContent = data.userName;
    this._userJob.textContent = data.userJob;
  }

  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}
