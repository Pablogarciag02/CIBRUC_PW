import React from "react";
import IMAGES from "../../Images";
import {motion} from "framer-motion"
import Qslider from "../../sliderHacemos/Qslider";

export default function SMCumplicionMeta() {
  return (
    <div className='m-10 '>
        <div className='m-10'>
            <div className='justify-center md:flex'>
                <div>
                    <h1 className='flex items-center mb-2 text-3xl sm:underline lg:mx-2 sm:underline-offset-8'>¿Como Logramos esa Meta?</h1>
                    <h1 className='flex items-center text-xl lg:mx-2 sm:text-1xl'>En CIBRUC estamos comprometidos en realizar cambio a traves de...</h1>
                    
                
                </div>
                <div className='border-black sm:mx-40'>
                <Qslider />
            </div>

                
                
            </div>  
            <img className='sm:h-96' src={IMAGES.goalsAbout}></img>
            
        </div>
    </div>
  )
}
