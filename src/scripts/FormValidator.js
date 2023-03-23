export default class FormValidator {
  constructor(formElement, selectors) {
    this._formElement = formElement;
    this._inputSelector = selectors.inputSelector;
    this._submitButtonSelector = selectors.submitButtonSelector;
    this._inactiveButtonClass = selectors.inactiveButtonClass;
    this._inputErrorClass = selectors.inputErrorClass;
    this._errorClass = selectors.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.errorClass);
    inputElement.classList.add(this.inputErrorClass);
}

_hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = "";
}

  _checkInputValidity(input) {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidInput = (inputList) => 
    inputList.some((input) => !input.validity.valid);


  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._setButtonState(true, this._inactiveButtonClass);
    } else {
      this._setButtonState(false, this._inactiveButtonClass);
    }
  }

  _setButtonState(disabled, classToAdd) {
    this._buttonElement.disabled = disabled;
    if (disabled) {
      this._buttonElement.classList.add(classToAdd);
    } else {
      this._buttonElement.classList.remove(classToAdd);
    }
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
      input.value = '';
    });
  }

  _setEventListeners = () => {
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
}