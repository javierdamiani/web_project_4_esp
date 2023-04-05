const template = document.querySelector("#cardTemplate");

export class Card {
  constructor(
    {
      data,
      handleCardClick,
      handleDeleteClick,
      handleLikeAdd,
      handleLikeDelete,
      userId,
    },
    template
  ) {
    this._name = data.name;
    this._link = data.link;
    this._template = template;
    this._id = data._id;
    this._likesArray = data.likes;
    this._cardLikes = this._likesArray.length;
    this._ownerId = data.owner._id;
    this._user = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeDelete = handleLikeDelete;

    this._element = this._getTemplate();

    this._heartButton = this._element.querySelector("#likeBtn");
    this._heartNumber = this._element.querySelector("#heartCounter");
    this._cardImage = this._element.querySelector("#cardImg");
    this._cardTitle = this._element.querySelector("#cardTitle");
  }

  _getTemplate() {
    const templateCard = template
      .cloneNode(true)
      .content.querySelector("#cities");
    return templateCard;
  }

  //handleLikeBtn
  addHeart() {
    this._heartButton.classList.add("elements__template_element-button_active");
    this._heartNumber.textContent = this._likesArray.length;
  }

  removeHeart() {
    this._heartButton.classList.remove(
      "elements__template_element-button_active"
    );
    this._heartNumber.textContent = this._likesArray.length;
    if (this._cardLikes === 0) {
      this._heartNumber.textContent = "";
    }
  }

  _deleteButton() {
    const trashBtn = this._element.querySelector("#trashCan");
    trashBtn.closest(".elements__template_element").remove();
  }

  updateLikes = (resArray) => {
    this._likesArray = resArray;
    return this._likesArray;
  };

  _setEventListeners() {
    this._heartButton.addEventListener("click", () => {
      const hasUserLiked = this._likesArray.some(
        (like) => like._id === this._user
      );
      if (hasUserLiked) {
        this._handleLikeDelete({ id: this._id });
      } else {
        this._handleLikeAdd({ id: this._id });
      }
    });

    this._element.querySelector("#trashCan").addEventListener("click", () => {
      this._handleDeleteClick({ id: this._id });
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });

    if (this._ownerId !== this._user) {
      this._element.querySelector("#trashCan").remove();
    }
  }

  generateCard() {
    this._setEventListeners();

    this._cardTitle.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.setAttribute("alt", this._name);

    this._heartNumber.textContent = this._cardLikes ? this._cardLikes : "";

    const hasUserLiked = this._likesArray.some(
      (like) => like._id === this._user
    );
    this._heartButton.classList.toggle(
      "elements__template_element-button_active",
      hasUserLiked
    );

    return this._element;
  }
}