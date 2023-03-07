
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
        errorElement.classList.add(configuration.errorClass);
        inputElement.classList.add(configuration.inputErrorClass);
    }

    _hideInputError(inputElement){
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(configuration.inputErrorClass);
        errorElement.classList.remove(configuration.errorClass);
        errorElement.textContent = "";
    }
}

enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__container-form-inputs-name",
    submitButtonSelector: ".popup__container-form-inputs-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  });
  