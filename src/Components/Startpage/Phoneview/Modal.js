import React from 'react'
import "./Modal.css"
import IMAGES from '../../Images';


export default function Modal({ closeModal }) {
  return (
    <div id="mymodal" className="grid content-start h-screen bg-green1 ">
        <button className="fixed top-28 right-10" id="goback" onClick ={()=> closeModal(false)}>
            <img src={IMAGES.goBack} width="25px" height="25px" alt=""></img>
        </button>

        <div className = "grid p-4 m-5 rounded-lg justify-items-center mt-14">
            <span className = "w-full p-4 text-xl text-center rounded-full text-background bg-verydarkgreen"><a href="#quienesSomos"> Quienes Somos</a></span>
            <span className = "w-full p-4 mt-4 text-xl text-center rounded-full text-background bg-verydarkgreen"><a href="#ser"> Quiero Ser un Super SER</a></span>
            <span className = "w-full p-4 mt-4 text-xl text-center rounded-full text-background bg-verydarkgreen"><a href="#contacto"> Contacto</a></span>
        </div> 


        <h1 className='flex justify-center mb-2 text-2xl text-center'>Siguenos en Redes Sociales</h1>

        <span id="modalLine"></span>

        <div className='flex justify-center mt-2'>
          <a className='mx-4' href="https://www.facebook.com/CCIBRUC" target="_blank"><img className="w-6" src={IMAGES.facebook}></img></a>
          <a className='mx-4' href="https://www.instagram.com/cibruc/" target="_blank"><img className="w-6" src={IMAGES.instagram}></img></a>
          <a className='mx-4' href="https://twitter.com/cibruc" target="_blank"><img className="w-6" src={IMAGES.twitter}></img></a>
          <a className='mx-4' href="https://www.tiktok.com/@cibruc" target="_blank"><img className="w-6" src={IMAGES.tiktok}></img></a>
        </div>

    </div>
  )
}
