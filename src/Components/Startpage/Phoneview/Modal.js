import React from 'react'
import "./Modal.css"
import IMAGES from '../../Images';


export default function Modal({ closeModal }) {
  return (
    <div id="mymodal" className="h-screen bg-green1 grid content-center ">
        <button className="fixed top-28 right-10" id="goback" onClick ={()=> closeModal(false)}>
            <img src={IMAGES.goBack} width="25px" height="25px" alt=""></img>
        </button>

        <div className = "grid justify-items-center m-5">
            <span className = "text-xl text-background"><a href="" target="_blank"> Quienes Somos</a></span>
            <span className = "text-xl text-background"><a href="" target="_blank"> Quiero Ser un Super SER</a></span>
            <span className = "text-xl text-background"><a href="" target="_blank"> Contacto</a></span>
        </div> 

    </div>
  )
}
