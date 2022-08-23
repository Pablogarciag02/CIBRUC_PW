import React from 'react'
import "./Header.css"
import IMAGES from '../Images'

export default function Header() {
  return (
    <div className='flex justify-between'>
    
      <img className="h-40 sm:h-48 md:h-64" src={IMAGES.myLogo} alt=""></img>
  

      <div className="mt-14 mr-24  invisible lg:visible">
        <span className = "mr-8 hover:underline hover:text-darkgreen"><a href="#">Inicio</a></span>
        <span className = "mr-8 hover:underline hover:text-darkgreen"><a href="#" target="_blank">Quienes Somos</a></span>
        <span className = "mr-8 hover:underline hover:text-darkgreen"><a href="#" target="_blank">Quiero Ser un Super SER</a></span>
        <span className = "mr-8 hover:underline hover:text-darkgreen"><a href="#" target="_blank">Contacto</a></span>
      </div>
    </div>
  )
}
