class UserInfo {
    constructor({userName, userJob}){
        this._userName = userName,
        this._userJob = userJob
    }

    getUserInfo(){
        return {
            userName: this._userName.textContent,
            userJob: this._userJob.textContent,
          };
    }

    setUserInfo(data){
        const {username, userjob} = data;
        this._userName.textContent = username;
        this._userJob.textContent = userjob;
      }
}