
import Popup from "./Popup.js";

export default class PopUpWithImage extends Popup{
    constructor(popUpSelector){
        super(popUpSelector);
        this._title = this._popUpElement.querySelector(".popup__img-title");
        this._image = this._popUpElement.querySelector(".popup__img-background")
    }
    open({name, link}){
        super.open()
        this._title.textContent = name;
        this._image.src = link;
        this._image.setAttribute("alt", name)
    }
}