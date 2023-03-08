import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { openModalCard } from "./utils.js";
import { closeModalCard } from "./utils.js";


const popUp = document.querySelector("#popUpProfile");
const profileInfoName = document.querySelector("#profName");
const profileInfoAbout = document.querySelector("#profAbout");
const popupFormName = document.querySelector("#popupName");
const popupFormAbout = document.querySelector("#popupAbout");
const popUpAdd = document.querySelector("#popUpAdd");
const newTitle = document.querySelector("#title");
const newImg = document.querySelector("#linkImg");
const cardContainer = document.querySelector(".elements");

initialCards.forEach(function (element) {
const cardElement = new Card(element).generateCard();
cardContainer.append(cardElement);
});

export function handleAddFormSubmit(evt, link, name) {
  evt.preventDefault();
  const createdCard = new Card({
    link: newImg.value,
    name: newTitle.value,
  }).generateCard();
  cardContainer.prepend(createdCard);
  closeAddPopUp();
}

export function openPopUp() {
  popUp.classList.add("popup__opened");
  popupFormName.value = profileInfoName.textContent;
  popupFormAbout.value = profileInfoAbout.textContent;
}

export function closePopUp() {
  popUp.classList.remove("popup__opened");
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileInfoName.textContent = popupFormName.value;
  profileInfoAbout.textContent = popupFormAbout.value;
  closePopUp();
}
export function openAddPopUp() {
  popUpAdd.classList.add("popup__opened");
}

export function closeAddPopUp() {
  popUpAdd.classList.remove("popup__opened");
}

export function keyHandlerEvent(evt) {
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