import React from 'react'
import "./Modal.css"
import IMAGES from '../../Images';


export default function Modal({ closeModal }) {
  return (
    <div id="mymodal" className="h-screen bg-green1 grid content-start ">
        <button className="fixed top-28 right-10" id="goback" onClick ={()=> closeModal(false)}>
            <img src={IMAGES.goBack} width="25px" height="25px" alt=""></img>
        </button>

        <div className = "grid justify-items-center m-5 mt-20 p-4  rounded-lg">
            <span className = "text-2xl text-background text-center bg-verydarkgreen p-4 rounded-full w-full"><a href="/QuienesSomos"> Quienes Somos</a></span>
            <span className = "mt-4 text-2xl text-background text-center  bg-verydarkgreen p-4 rounded-full w-full"><a href="/QuieroSER"> Quiero Ser un Super SER</a></span>
            <span className = "mt-4 text-2xl text-background text-center bg-verydarkgreen p-4 rounded-full w-full"><a href="/Contacto"> Contacto</a></span>
        </div> 


        <h1 className='flex justify-center mt-40 mb-2 text-4xl text-center'>Siguenos en Redes Sociales</h1>

        <span id="modalLine"></span>

        <div className='flex justify-center mt-2'>
          <a className='mx-4' href="https://www.facebook.com/CCIBRUC" target="_blank"><img src={IMAGES.facebook}></img></a>
          <a className='mx-4' href="https://www.instagram.com/cibruc/" target="_blank"><img src={IMAGES.instagram}></img></a>
          <a className='mx-4' href="https://twitter.com/cibruc" target="_blank"><img src={IMAGES.twitter}></img></a>
          <a className='mx-4' href="https://www.tiktok.com/@cibruc" target="_blank"><img src={IMAGES.tiktok}></img></a>
        </div>

    </div>
  )
}
