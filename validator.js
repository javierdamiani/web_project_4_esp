
class Validator{
    constructor(settings, formElement){
        this.formSelector = settings.formSelector;
        this.inputSelector = settings.inputSelector;
        this.submitButtonSelector = settings.submitButtonSelector;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.inputErrorClass = settings.inputErrorClass;
        this.errorClass = settings.errorClass;
        this.settings = settings;
        this.formElement = formElement;
    }

    _showInputError(inputElement){
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this.errorClass);
        inputElement.classList.add(this.inputErrorClass);
    }

    _hideInputError(inputElement){
        const errorElement = this.formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
          } else {
            this._hideInputError(inputElement);
          }
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }

    _toggleButtonState(inputList, buttonElement){
        if (this._hasInvalidInput(inputList)) {
            buttonElement.classList.add(this.inactiveButtonClass);
          } else {
            buttonElement.classList.remove(this.inactiveButtonClass);
          }
    }

    _setEventListeners(){
        const inputList = Array.from(
            this.formElement.querySelectorAll(this.inputSelector)
          );
          const buttonElement = this.formElement.querySelector(
            this.submitButtonSelector
          );
          inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
              this._checkInputValidity(inputElement);
              this._toggleButtonState(inputList, buttonElement);
            });
          });
    }

    _enableValidation(){
        this._setEventListeners()
    }
}

const settings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__container-form-inputs-name",
    submitButtonSelector: ".popup__container-form-inputs-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

const formElement = document.querySelector(".popup__form")
const placeFormElement = document.querySelector("#placeForm")

const addValidation = new Validator(settings, formElement)._enableValidation(); //Crear una instancia
const addPlaceValidation = new Validator(settings, placeFormElement)._enableValidation();




  