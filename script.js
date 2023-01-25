const editBtn = document.querySelector(".profile__info-edit_button");
const popUp = document.querySelector(".popup");
const closePopUpBtn = document.querySelector(
  ".popup__container-form-toggle_close"
);
//Variables para jalar el nombre de la web
const profileInfoName = document.querySelector(".profile__info-name");
const profileInfoAbout = document.querySelector(".profile__info-explorer");

const popupFormName = document.querySelector(
  ".popup__container-form-inputs_name"
);
const popupFormAbout = document.querySelector(
  ".popup__container-form-inputs_about"
);
const buttonSubmit = document.querySelector(
  ".popup__container-form-inputs_button"
);

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

editBtn.addEventListener("click", openPopUp);
closePopUpBtn.addEventListener("click", closePopUp);
buttonSubmit.addEventListener("click", handleProfileFormSubmit);
