import React from 'react'
import IMAGES from '../Images'
import Qslider from '../sliderHacemos/Qslider'

export default function CumplicionMeta() {
  return (
    <div className='ml-10'>
        <div className='ml-10'>
            <div className='justify-center sm:flex'>
                <div>
                    <h1 className='flex items-center mb-2 text-6xl xl:ml-40 '>¿Como Logramos esa Meta?</h1>
                    <h1 className='flex items-center text-xl xl:ml-40 sm:text-1xl'>En CIBRUC estamos comprometidos en realizar cambio a traves de...</h1>
                    <div className='border-black xl:ml-40'>
                        <Qslider />
                    </div>
                </div>
                <img className='mt-48 xl:mt-0 sm:h-96 md:h-96 lg:h-96 xl:h-auto lg:w-1/2 xl:w-1/2 2xl:w-1/2' src={IMAGES.goalsAbout}></img>
                
            </div>  
        </div>
    </div>
  )
}
