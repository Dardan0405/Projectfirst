// const [count,SetCount] = useState(0) Sintaksa e UseState
import "./PopUp.scss"
import React from "react"
import { useState } from "react"
import { MdClose } from "react-icons/md";

function PopUp () {
    const [PopUpOpen,SetPopUpOpen] = useState(false);
    const OpenPopup = () =>{
        SetPopUpOpen(true)
    } 
    const closePopUp =() =>{
        SetPopUpOpen(false)
    }
return(
    <div className="PopUp-Container">
<button onClick={OpenPopup}>Click Here</button>
{PopUpOpen&&(
    <div className="PopUp-Content">
        <div className="Top-Part">
            <h1>PopUp</h1>
            <button onClick={closePopUp}><MdClose/></button>
        </div>
        <div className="BottomPart">
            <p>PopUp or else Modul</p>
        </div>
    </div>

)}
    </div>
)
}
export default PopUp
