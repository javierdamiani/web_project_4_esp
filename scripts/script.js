import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { 
  editBtn, 
  addBtn, 
  profileTitle, 
  profileProfession } from "./utils.js";

import  Section  from "./Section.js"
import PopUpWithForm from "./PopUpWithForm.js";
import PopUpWithImage from "./PopUpWithImage.js";
import UserInfo from "./UserInfo.js";

const popupFormName = document.querySelector("#popupName");
const popupFormAbout = document.querySelector("#popupAbout");
const newTitle = document.querySelector("#title");
const newImg = document.querySelector("#linkImg");

const modalCard = new PopUpWithImage("#modalPopUp");
modalCard.setEventListeners()

const createCard = (data) => {
  const cardElement = new Card({data, 
    handleCardClick: ({name, link}) => {
    modalCard.open({name, link})
  } });
  return cardElement._generateCard();
}

const sectionCards = new Section({
  data: initialCards,
  renderer: (cardItem) => {
    const cardElement = createCard(cardItem)
    sectionCards.addCards(cardElement);
  },
}, ".elements")
sectionCards.renderer();

const handleAddFormSubmit = () => {
  const cardElement = createCard({
    link: newImg.value,
    name: newTitle.value,
   });
   sectionCards.addItem(cardElement)
  createCardPopUp.close();
}

const createCardPopUp = new PopUpWithForm("#popUpAdd", handleAddFormSubmit);
createCardPopUp.setEventListeners();

addBtn.addEventListener("click", () => {
  createCardPopUp.open()
})

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupFormName.value;
  profileProfession.textContent = popupFormAbout.value;
  editPopUp.close();
}

//No toma los valores correctamente de la página web 

const editPopUp = new PopUpWithForm("#popUpProfile", handleProfileFormSubmit);
editPopUp.setEventListeners();

editBtn.addEventListener("click", () => {
  editPopUp.open();
} )

const profileUser = new UserInfo({
  userName: profileTitle,
  userJob: profileProfession,
})