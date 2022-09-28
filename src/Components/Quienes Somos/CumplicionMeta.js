import React from 'react'
import IMAGES from '../Images'
import Qslider from '../sliderHacemos/Qslider'

export default function CumplicionMeta() {
  return (
    <div className='m-10'>
        <div className='m-10'>
            <div className='justify-center sm:flex'>
                <div>
                    <h1 className='flex items-center mb-2 text-6xl sm:ml-40 '>Como Logramos esa Meta</h1>
                    <h1 className='flex items-center text-xl sm:ml-40 sm:text-1xl'>En CIBRUC estamos comprometidos en realizar cambio a traves de...</h1>
                    <div className='border-black sm:mx-40'>
                        <Qslider />
                    </div>
                </div>
                <img className='sm:w-1/2' src={IMAGES.goalsAbout}></img>
                
            </div>  
        </div>
    </div>
  )
}
