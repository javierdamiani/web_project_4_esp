
import Popup from "./Popup.js";

class PopUpWithImage extends Popup{
    constructor(popUpSelector){
        super(popUpSelector);
        this._title = this._popUpElement.querySelector(".popup__img-title");
        this._image = this._popUpElement.querySelector(".popup__img-background")
    }
    open(){
        this._popUpElement.classList.add("popup__img_opened");
        this._title = name;
        this._image = link;
        this._image.setAttribute("alt", name)
    }
}