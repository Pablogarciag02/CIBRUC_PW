import React from 'react'
import IMAGES from '../Images'
import Slider from '../sliderStart/Slider'
import SliderIMAGES from '../sliderStart/sliderStartData'

export default function Startbody() {
  return (
    <div className="mt-10">
        <div className="justify-center m-10 sm:mx-40 sm:flex sm:justify-between">
          <div className=''>
            <h1 className="text-4xl sm:text-8xl">Cibruc</h1>
            <h2 className="text-3xl sm:text-6xl">Creando Ciencia y Conciencia</h2>
            <p className="text-2xl sm:text-3xl mt-4">En Cibruc estamos comprometidos con el medio ambiente y promovemos acciones dirigidas a su preservación y mejora.</p>
          </div>
          {/* <img class="rounded-md" src={SliderIMAGES.flower} height="335" width="335"></img> */}
          <div className="">
            <Slider />
          </div>
        </div>
    </div>
  )
}
