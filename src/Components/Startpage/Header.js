import React from 'react'
import "./Header.css"
import { HashLink, NavHashLink } from 'react-router-hash-link'

import IMAGES from '../Images'



export default function Header() {
  return (
    <div id="headerview" className='flex justify-between'>
    
      <img className="h-40 mt-5 ml-5 "  src={IMAGES.mainLogo}  alt=""></img>
  
      <div className="invisible mr-24 mt-14 lg:visible">
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><HashLink smooth to="#headerview">Inicio</HashLink></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><HashLink smooth to="#quienesSomos">Quienes Somos</HashLink></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><HashLink smooth to="#ser">Quiero Ser un Super SER</HashLink></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><HashLink smooth to="#contacto">Contacto</HashLink></span>
      </div>
    </div>
  )
}
