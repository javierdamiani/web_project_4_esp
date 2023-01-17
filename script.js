const editBtn = document.querySelector(".profile__info-edit_button");
const popUp = document.querySelector(".popup");
const closePopUpBtn = document.querySelector(
  ".popup__container-form-toggle_close"
);
//Variables para jalar el nombre de la web
let profileInfoName = document.querySelector(".profile__info-name");
let profileInfoAbout = document.querySelector(".profile__info-explorer");

let popupFormName = document.querySelector(
  ".popup__container-form-inputs_name"
);
let popupFormAbout = document.querySelector(
  ".popup__container-form-inputs_about"
);
let buttonSubmit = document.querySelector(
  ".popup__container-form-inputs_button"
);

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
