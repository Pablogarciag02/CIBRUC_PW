import React from 'react'
import "./Header.css"

import IMAGES from '../Images'



export default function Header() {
  return (
    <div id="headerview" className='flex justify-between'>
    
      <img className="h-40 mt-5 ml-5 "  src={IMAGES.mainLogo}  alt=""></img>
  
      <div className="invisible mr-24 mt-14 lg:visible">
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="#headerview">Inicio</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="#quienesSomos">Quienes Somos</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="#ser">Quiero Ser un Super SER</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="#contacto">Contacto</a></span>
      </div>
    </div>
  )
}
