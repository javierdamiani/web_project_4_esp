export default class Popup {
    constructor(popUpSelector){
        this._popUpElement = document.querySelector(popUpSelector);
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open(){
        this._popUpElement.classList.add("popup__opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
        this._popUpElement.classList.remove("popup__opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(evt){
        if(evt.key === "Escape"){ 
            this.close();
        }
    }

    _clickOutside(evt){
        return (
            evt.target.classList.contains("popup") ||
            evt.target.classList.contains("popup__close") ||
            evt.target.classList.contains("popup__close-button") ||
            evt.target.classList.contains("popup__img-close") ||
            evt.target.classList.contains("popup__img")
          )
    }
    
    setEventListeners(){
        this._popUpElement.addEventListener("click", (evt) =>{
            if(this._clickOutside(evt)){
                this.close();
            }
        })
    }
}