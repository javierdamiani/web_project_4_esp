import "./styles/index.css";
import { Card } from "./scripts/Card.js";
import { initialCards } from "./scripts/initialCards.js";
import {
  selectors,
  editBtn,
  addBtn,
  profileTitle,
  profileProfession,
  profileImage,
  profileImageOverlay,
  popupFormName,
  popupFormAbout,
  newTitle,
  newImg,
  formElement,
  placeFormElement,
  imageFormElement,
  buttonSubmit,
  addCardSubmit,
  imageSubmit,
  btnDelete,
} from "./scripts/utils.js";
import FormValidator from "./scripts/FormValidator.js";
import Section from "./scripts/Section.js";
import PopUpWithForm from "./scripts/PopUpWithForm.js";
import PopUpWithImage from "./scripts/PopUpWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import Api from "./scripts/Api.js";
import PopUpDeleteImage from "./scripts/PopUpDeleteImage";

export const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_cohort_03",
  headers: {
    authorization: "278fd53d-b84a-49c6-aef1-178b52806850",
    "Content-Type": "application/json",
  },
});

const profilePopUpValidator = new FormValidator(formElement, selectors);
const addPlaceValidation = new FormValidator(placeFormElement, selectors);
const profileImagePopupValidator = new FormValidator(
  imageFormElement,
  selectors
);

profilePopUpValidator.enableValidation();
addPlaceValidation.enableValidation();
profileImagePopupValidator.enableValidation();

const modalCard = new PopUpWithImage("#modalPopUp");
modalCard.setEventListeners();

const editPopUp = new PopUpWithForm(
  ".popup_type_profile",
  (data) => {
    api
      .handleEditProfile(data)
      .then((response) => {
        api.getUserInfo().then((value) => {
          console.log(value);
          profileUser.setUserInfo({
            userName: value.name,
            userJob: value.about,
          });
        });

        editPopUp.close();
      })
      .catch((err) => console.log(err));
  },
  buttonSubmit
);

editPopUp.setEventListeners();

const profileUser = new UserInfo({
  userName: profileTitle,
  userJob: profileProfession,
  userAvatar: profileImage,
});

editBtn.addEventListener("click", () => {
  editPopUp.open();
  profilePopUpValidator.resetValidation();
  const profileUserInfo = profileUser.getUserInfo();
  popupFormName.value = profileUserInfo.userName;
  popupFormAbout.value = profileUserInfo.userJob;
});

api
  .getUserInfo()
  .then((res) => {
    profileUser.setUserInfo({ userName: res.name, userJob: res.about });
    profileUser.setUserAvatar(res.avatar);
    profileUser.userId = res._id;
  })
  .then(() => {
    api
      .getCardList()
      .then((res) => {
        const sectionCards = new Section(
          {
            data: res,
            renderer: (cardItem) => {
              const cardElement = createCard(cardItem);
              sectionCards.addCards(cardElement);
            },
          },
          ".elements"
        );
        sectionCards.renderer();

        const createCardPopUp = new PopUpWithForm(
          ".popup_type_card",
          (formData) => {
            api
              .addCard({ name: formData.title, link: formData["image-link"] })
              .then((newCard) => {
                const newCardElement = createCard(newCard);
                sectionCards.addItem(newCardElement);
                createCardPopUp.close();
              })
              .catch((err) => console.log(err));
          },
          addCardSubmit
        );

        createCardPopUp.setEventListeners();

        addBtn.addEventListener("click", () => {
          createCardPopUp.open();
          addPlaceValidation.resetValidation();
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const profileImagePopup = new PopUpWithForm(
  ".popup_image_profile",
  (data) => {
    const avatar = data["image-link"];
    api
      .setUserAvatar(avatar)
      .then(() => {
        profileUser.setUserAvatar(avatar);
        profileImagePopup.close();
      })
      .catch((err) => console.log(err));
  },
  imageSubmit
);

profileImagePopup.setEventListeners();

profileImageOverlay.addEventListener("click", () => {
  profileImagePopup.open();
  profileImagePopupValidator.resetValidation();
});

const deleteCardPopUp = new PopUpDeleteImage({
  popUpSelector: "#deleteCard",
  submitButton: btnDelete,
});

deleteCardPopUp.setEventListeners();

function createCard(data) {
  const cardElement = new Card(
    {
      data,
      handleCardClick: ({ name, link }) => {
        modalCard.open({ name, link });
      },

      handleDeleteClick: ({ id }) => {
        deleteCardPopUp.open();
        deleteCardPopUp.setSubmitAction(() => {
          api
            .removeCard(id)
            .then(() => {
              deleteCardPopUp.close();
              cardElement._deleteButton();
            })
            .catch((err) => console.log(err));
        });
      },

      handleLikeAdd: ({ id }) => {
        api
          .addLike(id)
          .then((res) => {
            cardElement.updateLikes(res.likes);
            cardElement.addHeart();
          })
          .catch((err) => console.log(err));
      },

      handleLikeDelete: ({ id }) => {
        api
          .removeLike(id)
          .then((res) => {
            cardElement.updateLikes(res.likes);
            cardElement.removeHeart();
          })
          .catch((err) => console.log(err));
      },

      userId: profileUser.userId,
    },
    "#cardTemplate"
  );
  return cardElement.generateCard();
}
