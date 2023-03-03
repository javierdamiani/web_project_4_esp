const templateCard = document
  .querySelector("#cardTemplate")
  .cloneNode(true).content;
//cardItem = templateCard
const popUpModalCard = document.querySelector("#modalPopUp");
const popUpImg = document.querySelector("#cardPopUp");
const popUpImgTitle = document.querySelector("#popUpImgTitle");

class Card {
  constructor(name, link) {
    this._name = name;
    this._src = link;
  }

  getTemplate() {
    const cardItem = templateCard.querySelector("#cities");
    return cardItem;
  }

  _handleLikeBtn() {
    this.likeBtn.classList.toggle("elements__template_element-button_active");
  }
  _handleTrashCan() {
    this._cityCard.remove();
  }
  _openModalCard() {
    popUpModalCard.classList.add("popup__img_opened");
  }
  _closeModalCard() {
    popUpModalCard.classList.remove("popup__img_opened");
  }

  setCardValues() {
    this._cardLink = this._cityCard.querySelector("#cardImg");
    this._cardTitle = this._cityCard.querySelector("#cardTitle");
    this._trashCan = this._cityCard.querySelector("#trashCan");
    this._likeBtn = this._cityCard.querySelector("#likeBtn");
    this._cardTitle.textContent = this._name;
    this._cardLink = this._src;
  }

  setEventListeners() {
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeBtn();
    });
    this._trashCan.addEventListener("click", () => {
      this._handleTrashCan();
    });
    this._cardLink.addEventListener("click", () => {
      openModalCard();
      popUpImg.src = card.link;
      popUpImgTitle.textContent = cardTitle.textContent;
    });
  }

  _createCard() {
    this.generatedCard = this.getTemplate();
    this.setCardValues();
    this.setEventListeners();
    return this._cityCard;
  }
}
