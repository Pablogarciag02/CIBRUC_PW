import React from 'react'
import "./Header.css"
import IMAGES from '../Images'
import {useLocation } from "react-router-dom"


export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <div className='flex justify-between'>
    
      <img className="mt-5 ml-5 h-40 "  src={IMAGES.myLogo}  alt=""></img>
  
      <div className="mt-14 mr-24  invisible lg:visible">
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="/CIBRUC_PW">Inicio</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="/QuienesSomos">Quienes Somos</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="/QuieroSER">Quiero Ser un Super SER</a></span>
        <span className = "mr-8 text-xl hover:underline hover:text-darkgreen"><a href="/Contacto">Contacto</a></span>
      </div>
    </div>
  )
}
