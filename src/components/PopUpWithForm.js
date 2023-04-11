import Popup from "./Popup.js";

export default class PopUpWithForm extends Popup {
    constructor(popUpSelector, handleFormSubmit, submitButton){
        super(popUpSelector);
        this._inputList = this._popUpElement.querySelectorAll(".popup__input");
        this._formElement = this._popUpElement.querySelector(".popup__form");
        this._submitButton = submitButton;
        this._handleFormSubmit = handleFormSubmit
    }

    close(){
        super.close();
        this._formElement.reset()
    }

    _getInputValues(){
        this._formValues ={};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
          });
          console.log(this._formValues);
          return this._formValues;
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Guardando...";
        } else {
            this._submitButton.textContent = ""
          }
    }

    setEventListeners(){
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit(this._getInputValues());
          });
    }
}