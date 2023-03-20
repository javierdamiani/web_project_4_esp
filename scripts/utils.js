

import { handleProfileFormSubmit } from "./script.js";


export const profileTitle = document.querySelector("#profName");
export const profileProfession = document.querySelector("#profAbout");

const closeImgPopUp = document.querySelector("#closeImgBtn");
export const editBtn = document.querySelector("#editButton");
const closePopUpBtn = document.querySelector("#closeBtn");
const popUp = document.querySelector("#popUpProfile");
const popUpModalCard = document.querySelector("#modalPopUp");
const popUpAdd = document.querySelector("#popUpAdd");
const buttonSubmit = document.querySelector("#btnSubmit");
export const addBtn = document.querySelector("#addImg");
const closePopUpAdd = document.querySelector("#closeAddBtn");

  buttonSubmit.addEventListener("click", handleProfileFormSubmit);
