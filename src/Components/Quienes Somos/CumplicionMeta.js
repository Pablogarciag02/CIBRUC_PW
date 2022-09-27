import React from 'react'
import IMAGES from '../Images'

export default function CumplicionMeta() {
  return (
    <div className='m-10 mb-80 '>
        <div className='m-10'>
            <div className='justify-center sm:flex'>
                <div>
                    <h1 className='flex items-center mb-2 text-3xl underline sm:mx-40 underline-offset-8'>Como Logramos esa Meta</h1>
                    <h1 className='flex items-center text-xl sm:mx-40 sm:text-1xl'>En CIBRUC estamos comprometidos en realizar cambio a traves de...</h1>
                    
                    <div id="listAbout" className='items-start grid-cols-2 sm:grid sm:ml-40'>
                    <ul className='list-disc'>
                        <li className='mt-4 sm:mr-5 sm:mt-4'>Talleres y Cursos de Capacitación</li>
                        <li className='mt-4 sm:mr-5 sm:mt-8'>Estudios de caracterización de Residuos</li>
                        <li className='mt-4 sm:mr-5 sm:mt-4'>Investigaciones Medioambientales</li>
                        <li className='mt-4 sm:mr-5 sm:mt-4'>Proyectos Ejecutivos de RSU</li>
                        <li className='mt-4 sm:mr-5 sm:mt-4'>Revisión y Opiniones técnicas de Technologías de Tratamientos de RSU</li>
                    </ul>

                    <ul className='list-disc'>
                        <li className='mt-4 sm:mt-4 sm:ml-1'>Implementación de Proyectos de Biodigestión de Proyectos de Biodigestión Anaerobia</li>
                        <li className='mt-4 sm:mt-2 sm:ml-1'>Implementación de Proyectos de Composta y Fertilizante</li>
                        <li className='mt-4 sm:mt-4 sm:ml-1'>Implementación de Proyectos de Combustible Derivado de Residuos</li>
                        <li className='mt-4 sm:mt-8 sm:ml-1'>Asesoría a Municipios, Entidades Federativas y funcionarios gubernamentales.</li>
                    </ul>
                    </div>
                </div>
                <img className='sm:w-1/2' src={IMAGES.goalsAbout}></img>
                
            </div>  
        </div>
    </div>
  )
}
