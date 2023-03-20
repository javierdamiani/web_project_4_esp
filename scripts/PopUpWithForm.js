import Popup from "./Popup.js";

export default class PopUpWithForm extends Popup {
    constructor(popUpSelector, handleFormSubmit){
        super(popUpSelector);
        this._inputList = this._popUpElement.querySelectorAll(".popup__container-form-inputs-name");
        this._formElement = this._popUpElement.querySelector(".popup__form");
        this._submitButton = this._popUpElement.querySelector(".popup__container-form-inputs-button");
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