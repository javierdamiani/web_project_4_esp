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
const templateCard = document.querySelector("#cardTemplate");

//Variables para crear las tarjetas iniciales con JS
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardContainer = document.querySelector(".elements");
const popUpModalCard = document.querySelector("#modalPopUp");
const popUpImg = document.querySelector("#cardPopUp");
const closeImgPopUp = document.querySelector("#closeImgBtn");
const popUpImgTitle = document.querySelector("#popUpImgTitle");

function openModalCard() {
  popUpModalCard.classList.add("popup__img_opened");
}
function closeModalCard() {
  popUpModalCard.classList.remove("popup__img_opened");
}

function cardGenerator(card) {
  const cardItem = templateCard.content.cloneNode(true);
  const cardLink = cardItem.querySelector(".elements__element-image");
  const trashCan = cardItem.querySelector("#trashCan");
  const likeBtn = cardItem.querySelector("#likeBtn");
  const cardTitle = cardItem.querySelector("#cardTitle");
  cardItem.querySelector("#cardImg").src = card.link;
  cardItem.querySelector("#cardTitle").textContent = card.name;
  cardLink.addEventListener("click", function () {
    openModalCard();
    popUpImg.src = card.link;
    popUpImgTitle.textContent = cardTitle.textContent;
    console.log("Funciona");
  });
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("elements__element-button_active");
  });
  trashCan.addEventListener("click", function () {
    const cardItem = trashCan.closest(".elements__element");
    cardItem.remove();
  });
  return cardItem;
}

initialCards.forEach(function (element) {
  const cardElement = cardGenerator(element);
  cardContainer.append(cardElement);
});

function handleAddFormSubmit(evt, link, name) {
  evt.preventDefault();
  const createdCard = cardGenerator({
    link: newImg.value,
    name: newTitle.value,
  });
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

editBtn.addEventListener("click", openPopUp);
closePopUpBtn.addEventListener("click", closePopUp);
buttonSubmit.addEventListener("click", handleProfileFormSubmit);
addBtn.addEventListener("click", openAddPopUp);
closePopUpAdd.addEventListener("click", closeAddPopUp);
addSubmit.addEventListener("click", handleAddFormSubmit);
closeImgPopUp.addEventListener("click", closeModalCard);
