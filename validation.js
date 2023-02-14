//Variables para la validación de formularios

const showInputError = (formElement, inputElement, configuration) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(configuration.errorClass);
  inputElement.classList.add(configuration.inputErrorClass);
};

const hideInputError = (formElement, inputElement, configuration) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(configuration.inputErrorClass);
  errorElement.classList.remove(configuration.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configuration) => {
  console.log(inputElement, formElement);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, configuration);
  } else {
    hideInputError(formElement, inputElement, configuration);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

const setEventListeners = (formElement, configuration) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    configuration.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configuration);
      toggleButtonState(inputList, buttonElement, configuration);
    });
  });
  console.log(inputList, formElement);
};

const enableValidation = (configuration) => {
  const formList = Array.from(
    document.querySelectorAll(configuration.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, configuration);
  });
};

//CAMBIAR CLASES DE FORMULARIOS

// habilitar la validación llamando a enableValidation()
// pasar todas las configuraciones en la llamada

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".popup__container-form-inputs-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
