import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { openModalCard } from "./scripts/utils.js";

const editBtn = document.querySelector("#editButton");
const popUp = document.querySelector("#popUpProfile");
const closePopUpBtn = document.querySelector("#closeBtn");
//Variables para jalar el nombre de la web
const profileInfoName = document.querySelector("#profName");
const profileInfoAbout = document.querySelector("#profAbout");

const popupFormName = document.querySelector("#popupName");
const popupFormAbout = document.querySelector("#popupAbout");
const buttonSubmit = document.querySelector("#btnSubmit");
//Variables para agregar nueva imagen
const addBtn = document.querySelector("#addImg");
const popUpAdd = document.querySelector("#popUpAdd");
const closePopUpAdd = document.querySelector("#closeAddBtn");
const newTitle = document.querySelector("#title");
const newImg = document.querySelector("#linkImg");
const addSubmit = document.querySelector("#btnCreate");
// const templateCard = document.querySelector("#cardTemplate");
const allPopUps = document.querySelectorAll(".popup");
const cardContainer = document.querySelector(".elements");

// const cardContainer = document.querySelector(".elements");
const popUpModalCard = document.querySelector("#modalPopUp");
const popUpImg = document.querySelector("#cardPopUp");
const closeImgPopUp = document.querySelector("#closeImgBtn");
const popUpImgTitle = document.querySelector("#popUpImgTitle");


function closeModalCard() {
  popUpModalCard.classList.remove("popup__img_opened");
}

initialCards.forEach(function (element) {
const cardElement = new Card(element).generateCard();
cardContainer.append(cardElement);
});

function handleAddFormSubmit(evt, link, name) {
  evt.preventDefault();
  const createdCard = new Card({
    link: newImg.value,
    name: newTitle.value,
  }).generateCard();
  cardContainer.prepend(createdCard);
  closeAddPopUp();
}

function openPopUp() {
  popUp.classList.add("popup__opened");
  popupFormName.value = profileInfoName.textContent;
  popupFormAbout.value = profileInfoAbout.textContent;
}

function closePopUp() {
  popUp.classList.remove("popup__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = popupFormName.value;
  profileInfoAbout.textContent = popupFormAbout.value;
  closePopUp();
}
function openAddPopUp() {
  popUpAdd.classList.add("popup__opened");
}
function closeAddPopUp() {
  popUpAdd.classList.remove("popup__opened");
}

function keyHandlerEvent(evt) {
  if (evt.key === "Escape") {
    closeAddPopUp();
    closeModalCard();
    closePopUp();
  }
  removeKeyHandlerEvent();
}

function removeKeyHandlerEvent() {
  document.removeEventListener("keydown", keyHandlerEvent, true);
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
