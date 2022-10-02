import React from 'react'
import "./SuperSER.css"
import IMAGES from '../Images'

export default function SuperSER() {
  return (
    <div id = "ser" className="flex justify-center my-10 ">
        
        <div  className="items-start justify-between rounded-lg p-14 sm:p-4 sm:items-center xl:flex lg:justify-between">
            <div className="mt-2">
                
                <div className='flex items-center ml-20 md:ml-40'>
                    <h1 className='font-bold text-8xl text-verydarkgreen'>S</h1><h1 className='text-2xl'>úper</h1>
                    <h1 className="ml-1 text-2xl"> Separador</h1>
                </div>
                
                <div className='flex items-center ml-20 md:ml-40'>
                    <h1 className='items-center font-bold text-8xl text-verydarkgreen'>E</h1> <h1 className='text-2xl'>cológico</h1>
                    <h1 className="ml-1 text-2xl"> De</h1>
                </div>
                
                <div className='flex items-center ml-20 md:ml-40'>
                    <h1 className='items-center font-bold text-8xl text-verydarkgreen'>R</h1><h1 className='text-2xl'>esiduos</h1>
                </div>
            </div>

            <div className='flex justify-center'>
                <p id = "superSer" className="flex justify-center w-64 p-4 my-5 text-xl text-left rounded-md sm:m-4 sm:mx-40">Nos encanta darte la bienvenida por tu iniciativa para convertirte en un Súper Ser y valoramos tu interés para informarte sobre lo que puedes hacer en tu hogar para tener un medioambiente más limpio y sano.</p>
            </div>

            <div className=''>
                <p className='my-4 text-2xl text-center '>Descarga nuestra app para aprender mas!</p>
                <div className="flex justify-center">
                    <a href='https://apps.apple.com/es/app/s-e-r-separaci%C3%B3n-de-residuos/id1532991255' alt="AppleAppLogo"><img className="mx-2" src={IMAGES.appStore}></img></a>
                    <a href='https://play.google.com/store/apps/details?id=com.cibruc.ser' alt="PlaystoreAppLogo"><img className="mx-2" src={IMAGES.playStore}></img></a>
                </div>
            </div>

        </div>
        
    </div>

  )
}
