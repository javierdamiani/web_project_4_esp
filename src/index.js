import "./styles/index.css"
import { Card } from "./scripts/Card.js"
import { initialCards } from "./scripts/initialCards.js";
import { 
  selectors,
  editBtn, 
  addBtn, 
  profileTitle, 
  profileProfession,
  popupFormName,
  popupFormAbout,
  newTitle,
  newImg,
  formElement,
  placeFormElement,
  } from "./scripts/utils.js";
import FormValidator from "./scripts/FormValidator.js";
import Section  from "./scripts/Section.js"
import PopUpWithForm from "./scripts/PopUpWithForm.js";
import PopUpWithImage from "./scripts/PopUpWithImage.js";
import UserInfo from "./scripts/UserInfo.js";


const profilePopUpValidator = new FormValidator(formElement, selectors)
const addPlaceValidation = new FormValidator(placeFormElement, selectors)

profilePopUpValidator.enableValidation();
addPlaceValidation.enableValidation();

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
  createCardPopUp.open();
  addPlaceValidation.resetValidation();
})

function handleProfileFormSubmit(evt) {
  profileTitle.textContent = popupFormName.value;
  profileProfession.textContent = popupFormAbout.value;
  editPopUp.close();
}

const editPopUp = new PopUpWithForm("#popUpProfile", handleProfileFormSubmit);
editPopUp.setEventListeners();

const profileUser = new UserInfo({
  userName: profileTitle,
  userJob: profileProfession,
})

editBtn.addEventListener("click", () => {
  editPopUp.open();
  profilePopUpValidator.resetValidation();
  const profileUserInfo = profileUser.getUserInfo();
  popupFormName.value = profileUserInfo.userName;
  popupFormAbout.value = profileUserInfo.userJob;
} )





