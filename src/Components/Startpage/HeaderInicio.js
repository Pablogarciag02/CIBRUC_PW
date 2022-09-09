import React from 'react'
import "./Header.css"
import "./StartPage.css"
import IMAGES from '../Images'


export default function HeaderInicio() {
  return (
    <div id ="headerView" className='flex justify-between'>
      
      <img id="headerLogo" className="mt-5 ml-5 h-40 "  src={IMAGES.mainLogo}  alt=""></img>
  

      <div className="mt-14 mr-24  invisible lg:visible">
        <span className = "mr-8 text-xl font-bold hover:underline hover:text-darkgreen"><a href="/CIBRUC_PW/QuienesSomos">Quienes Somos</a></span>
        <span className = "mr-8 text-xl font-bold hover:underline hover:text-darkgreen"><a href="/CIBRUC_PW/QuieroSER">Quiero Ser un Super SER</a></span>
        <span className = "mr-8 text-xl font-bold hover:underline hover:text-darkgreen"><a href="/CIBRUC_PW/Contacto">Contacto</a></span>
      </div>
    </div>
  )
}
