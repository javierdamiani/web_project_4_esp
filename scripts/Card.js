import { openModalCard } from "./utils.js";

const template = document.querySelector("#cardTemplate");
const popUpImg = document.querySelector("#cardPopUp");
const popUpImgTitle = document.querySelector("#popUpImgTitle");

export class Card {
    constructor(data){
        this._name = data.name;
        this._link = data.link;
    }

    _getTemplate(){
        const templateCard = template.cloneNode(true).content.querySelector("#cities");
        return templateCard
    }

    _handleLikeBtn(){
        this.likeBtn.classList.toggle("elements__template_element-button_active");
    }

    _handleDeleteBtn(){
        this.createdCard.remove();
    }

    _handleOpenModalCard(){
        openModalCard();
        popUpImg.src = this._link;
        popUpImgTitle.textContent = this.cardTitle.textContent;
    }

    _setEventListeners(){
        this.likeBtn.addEventListener("click",() => {
            this._handleLikeBtn()
        } )
        this.deleteBtn.addEventListener("click", () => {
            this._handleDeleteBtn()
        })
        this.cardImage.addEventListener("click", () => {
            this._handleOpenModalCard()
        })
    }

    _setCardProperties(){
        this.cardTitle = this.createdCard.querySelector("#cardTitle");
        this.cardImage = this.createdCard.querySelector("#cardImg");
        this.deleteBtn = this.createdCard.querySelector("#trashCan");
        this.likeBtn = this.createdCard.querySelector("#likeBtn");
        this.cardTitle.textContent = this._name;
        this.cardImage.src = this._link;
    }

    _generateCard(){
        this.createdCard = this._getTemplate();
        this._setCardProperties();
        this._setEventListeners();
        return this.createdCard
    }
}


