import React from 'react'
import IMAGES from '../Images'
import Slider from '../sliderStart/Slider'
import "./StartPage.css"
import SliderIMAGES from '../sliderStart/sliderStartData'

export default function Startbody() {
  return (
    <div id='startview' className="mt-10">
        <div className="justify-center m-10 sm:mx-40 sm:flex sm:justify-between">
          <div className='mb-20'>
            {/* <h1 className="text-4xl  sm:text-8xl">Cibruc</h1> */}
            <h2 className="text-3xl font-medium  sm:text-6xl">Creando Ciencia y Conciencia</h2>
            <p className="text-2xl font-medium  sm:text-3xl mt-4">En Cibruc estamos comprometidos con el medio ambiente y promovemos acciones dirigidas a su preservación y mejora.</p>
          </div>
          {/* <img class="rounded-md" src={SliderIMAGES.flower} height="335" width="335"></img> */}
          <div className="mb-20 sm:mb-20 ">
            <Slider />
          </div>
        </div>
    </div>
  )
}
