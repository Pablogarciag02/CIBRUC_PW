import React from 'react'
import "./SuperSER.css"

export default function SuperSER() {
  return (
    <div className="justify-center sm:mx-40 m-10 flex  ">
        
        <div id = "ser" className="p-4 sm:items-center items-start justify-between rounded-lg sm:flex sm:justify-between">
            <div className="mt-2 sm:mx-40">
                <h1 className='text-7xl'>SUPER </h1>

                <div className='flex items-center'>
                    <h1 className='text-5xl font-bold text-verydarkgreen'>S</h1><h1 className='text-xl'>uper</h1>
                    <h1 className="ml-1 text-xl"> Separador</h1>
                </div>
                
                <div className='flex items-center '>
                    <h1 className='text-5xl font-bold items-center text-verydarkgreen'>E</h1> <h1 className='text-xl'>cológico</h1>
                    <h1 className="ml-1 text-xl"> De</h1>
                </div>
                
                <div className='flex items-center'>
                    <h1 className='text-5xl font-bold items-center text-verydarkgreen'>R</h1><h1 className='text-xl'>esiduos</h1>
                </div>
            </div>

            <div className=''>
                <p id = "superSer" className="flex justify-center w-64 text-left text-xl rounded-md my-5 sm:m-0 sm:mx-40 p-4">Nos Encanta darte la bienvenida por tu iniciativa para convertirte en un Súper Ser y valoramos tu interés para informarte sobre lo que puedes hacer en tu hogar para tener un medioambiente más limpio y sano.</p>
            </div>

        </div>
        
    </div>

  )
}
