import { openModalCard } from "./utils.js";

const template = document.querySelector("#cardTemplate");
const popUpImg = document.querySelector("#cardPopUp");
const popUpImgTitle = document.querySelector("#popUpImgTitle");

export class Card {
    constructor(data){
        this._name = data.name;
        this._link = data.link;
    }

    getTemplate(){
        const templateCard = template.cloneNode(true).content.querySelector("#cities");
        return templateCard
    }

    handleLikeBtn(){
        this.likeBtn.classList.toggle("elements__template_element-button_active");
    }

    handleDeleteBtn(){
        this.createdCard.remove();
    }

    handleOpenModalCard(){
        openModalCard();
        popUpImg.src = this._link;
        popUpImgTitle.textContent = this.cardTitle.textContent;
    }

    setEventListeners(){
        this.likeBtn.addEventListener("click",() => {
            this.handleLikeBtn()
        } )
        this.deleteBtn.addEventListener("click", () => {
            this.handleDeleteBtn()
        })
        this.cardImage.addEventListener("click", () => {
            this.handleOpenModalCard()
        })
    }

    setCardProperties(){
        this.cardTitle = this.createdCard.querySelector("#cardTitle");
        this.cardImage = this.createdCard.querySelector("#cardImg");
        this.deleteBtn = this.createdCard.querySelector("#trashCan");
        this.likeBtn = this.createdCard.querySelector("#likeBtn");
        this.cardTitle.textContent = this._name;
        this.cardImage.src = this._link;
    }

    generateCard(){
        this.createdCard = this.getTemplate();
        this.setCardProperties();
        this.setEventListeners();
        return this.createdCard
    }
}


