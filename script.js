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

const templateCard = initialCards.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("elements__element");
  cardContainer.append(card);
  const likeButton = document.createElement("img");
  likeButton.classList.add("elements__element-button");
  likeButton.src = "./images/like_button.svg";
  card.append(likeButton);
  const image = document.createElement("img");
  image.classList.add("elements__element-image");
  image.src = element.link;
  card.append(image);
  const paragraph = document.createElement("p");
  paragraph.classList.add("elements__element-text");
  paragraph.textContent = element.name;
  card.append(paragraph);
  const rectangle = document.createElement("img");
  rectangle.classList.add("elements__element-rectangle");
  rectangle.src = "./images/Rectangle.png";
  card.append(rectangle);
});

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
