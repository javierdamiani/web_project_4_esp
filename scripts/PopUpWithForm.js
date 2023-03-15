import Popup from "./Popup.js";

class PopUpWithForm extends Popup {
    constructor(popUpSelector){
        super(popUpSelector);
        this._inputList = document.querySelectorAll(".popup__container-form-inputs-name");
        this._formElement = document.querySelector(".popup__form");
        this._submitButton = submitButton
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
          return this._formValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
          });
    }
}