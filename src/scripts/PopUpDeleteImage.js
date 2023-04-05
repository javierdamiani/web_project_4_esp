import PopUp from "./Popup.js"

export default class PopUpDeleteImage extends PopUp {
    constructor({popUpSelector, handleFormSubmit, submitButton}) {
        super(popUpSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._submitButton = submitButton;
    }

    close(){
        super.close();
        this.renderLoading(false);
    }

    setSubmitAction(action) {
        this._handleFormSubmit = action
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Borrando..."
        }
        else {
            this._submitButton.textContent = "Sí"
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._popUpElement.querySelector(".popup__button").addEventListener("click", (evt) => {
            evt.preventDefault();
            this.renderLoading(true);
            this._handleFormSubmit();
        })
    }
}