import React, { useEffect } from 'react';
// import { Container } from './styles';
import './style.global.css'
const AgeModal = () => {

    function OpenPopup() {
        const modalBG = document.getElementById("ModalBG")
        const LocalValidator = localStorage.getItem("popupModal")
        if (LocalValidator != "true"){
            modalBG.classList.add("PopUpModal-Display-Active")
            setTimeout(() => {
                modalBG.classList.add("PopUpModal-active")
            }, 250);
        }
    }

    function ClosePopUp() {
        const modalBG = document.getElementById("ModalBG")
        localStorage.setItem('popupModal', 'true');
        modalBG.classList.remove("PopUpModal-active")
        setTimeout(() => {
            modalBG.classList.remove("PopUpModal-Display-Active")
        }, 250);

    }

    useEffect(() => {
        
        OpenPopup()
    }, [])
    return (
        <div id="ModalBG" className="BackgroundComponentPopup">
            <div id="ModalContainer" className="PopupContainer">
                <div>
                    {/* Imagem lateral */}
                </div>
                <div className='PopupContent'>
                    <h4>
                        Você tem mais de 18 anos?
                    </h4>
                    <div className="ButtonsGroupPopup">
                        <a href="/politica-de-privacidade" className="ButtonNoPopup">
                            Não
                        </a>
                        <button onClick={ClosePopUp} className="ButtonYesPopup">
                            Sim
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export  {AgeModal};