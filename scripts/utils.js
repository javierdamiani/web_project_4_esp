import { openPopUp } from "./script.js";
import { closePopUp } from "./script.js"
import { closeAddPopUp } from "./script.js";
import { handleProfileFormSubmit } from "./script.js";
import { openAddPopUp } from "./script.js";
import { handleAddFormSubmit } from "./script.js";
import { keyHandlerEvent } from "./script.js";


const closeImgPopUp = document.querySelector("#closeImgBtn");
const editBtn = document.querySelector("#editButton");
const closePopUpBtn = document.querySelector("#closeBtn");
const popUp = document.querySelector("#popUpProfile");
const popUpModalCard = document.querySelector("#modalPopUp");
const popUpAdd = document.querySelector("#popUpAdd");
const buttonSubmit = document.querySelector("#btnSubmit");
const addBtn = document.querySelector("#addImg");
const closePopUpAdd = document.querySelector("#closeAddBtn");
const addSubmit = document.querySelector("#btnCreate");

export function openModalCard() {
    popUpModalCard.classList.add("popup__img_opened");
  }

export  function closeModalCard() {
    popUpModalCard.classList.remove("popup__img_opened");
  }

  popUpModalCard.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup_img") ||
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close") ||
      evt.target.classList.contains("popup__img")
    ) {
      closeModalCard();
    }
  });

  popUp.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup__container") ||
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopUp();
    }
  });

  popUpAdd.addEventListener("click", (evt) => {
    if (
      evt.target.classList.contains("popup__container") ||
      evt.target.classList.contains("popup") ||
      evt.target.classList.contains("popup__close")
    ) {
      closeAddPopUp();
    }
  });

  editBtn.addEventListener("click", openPopUp);
  closePopUpBtn.addEventListener("click", closePopUp);
  buttonSubmit.addEventListener("click", handleProfileFormSubmit);
  addBtn.addEventListener("click", openAddPopUp);
  closePopUpAdd.addEventListener("click", closeAddPopUp);
  addSubmit.addEventListener("click", handleAddFormSubmit);
  closeImgPopUp.addEventListener("click", closeModalCard);
  document.addEventListener("keydown", keyHandlerEvent);