export default class Popup {
    constructor(popUpSelector){
        this._popUpElement = document.querySelector(popUpSelector);
    }
    open(){
        this._popUpElement.classList.add("popup__opened");
    }
    close(){
        this._popUpElement.classList.remove("popup__opened");
    }
    _handleEscClose(evt){
        if(evt.key === "Escape"){
            this.close();
        }
    }
    _clickOutside(evt){
        if (
            evt.target.classList.contains("popup__container") ||
            evt.target.classList.contains("popup") ||
            evt.target.classList.contains("popup__close") ||
            evt.target.classList.contains("popup__container-form-toggle")
          ) {
            this.close();
          }
    }
    setEventListeners(){
        this._popUpElement.addEventListener("click", (evt) =>{
            if(this._clickOutside(evt)){
                this.close();
            }
        })
    }
}