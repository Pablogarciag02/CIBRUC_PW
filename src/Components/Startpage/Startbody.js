import React from 'react'
import Slider from '../sliderStart/Slider'
import "./StartPage.css"


export default function Startbody() {
  return (
    <div id='startview' className="mt-20">
        <div className="justify-center pb-40 mx-10 mt-10 sm:mx-40 sm:flex sm:justify-between">
          <div className='mb-20'>
            <h2 className="text-3xl font-medium sm:text-6xl">Creando Ciencia y Conciencia</h2>
            <p className="mt-4 text-2xl font-medium sm:text-3xl">En Cibruc estamos comprometidos con el medio ambiente y promovemos acciones dirigidas a su preservación y mejora.</p>
          </div>
          
          <div className=" sm:mb-20">
            <Slider />
          </div>
        </div>
    </div>
  )
}
