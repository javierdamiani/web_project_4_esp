
class Validator{
    constructor(settings, element){
        this.formSelector = settings.formSelector;
        this.inputSelector = settings.inputSelector;
        this.submitButtonSelector = settings.submitButtonSelector;
        this.inactiveButtonClass = settings.inactiveButtonClass;
        this.inputErrorClass = settings.inputErrorClass;
        this.errorClass = settings.errorClass;
        this.settings = settings;
        this.element = element;
    }

    _showInputError(inputElement){
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this.errorClass);
        inputElement.classList.add(this.inputErrorClass);
    }

    _hideInputError(inputElement){
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this.inputErrorClass);
        errorElement.classList.remove(this.errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement){
        if (!inputElement.validity.valid) {
            showInputError(formElement, inputElement, this.settings);
          } else {
            hideInputError(formElement, inputElement, this.settings);
          }
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
          });
    }

    _toggleButtonState(inputList, buttonElement){
        if (hasInvalidInput(inputList)) {
            this.buttonElement.classList.add("button_inactive");
          } else {
            this.buttonElement.classList.remove("button_inactive");
          }
    }

    _setEventListeners(){
        const inputList = Array.from(
            this.formElement.querySelectorAll(configuration.inputSelector)
          );
          const buttonElement = this.formElement.querySelector(
            configuration.submitButtonSelector
          );
    }

    _toggleButtonState(inputList, buttonElement);

}

const addValidation = new Validator(settings, formElement);

this.inputList.forEach((inputElement) => {
  this.inputElement.addEventListener("input", function () {
    checkInputValidity(formElement, inputElement, configuration);
    toggleButtonState(inputList, buttonElement, configuration);
  });
});

const settings = enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__container-form-inputs-name",
    submitButtonSelector: ".popup__container-form-inputs-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
  