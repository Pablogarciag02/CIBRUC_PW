import React from 'react'
import IMAGES from '../Images'
import "../Startpage/StartPage.css"

export default function About() {
  return (
    <div className='m-10 mb-80 '>
      <div className='m-10'>
        <h1 className='flex justify-center text-3xl sm:mx-40 sm:text-6xl' id="about">Quienes Somos</h1>
        <span className="flex justify-center" id="quienesSomos"></span>
        <h1 className='flex justify-center text-2xl text-center sm:mx-40 sm:text-3xl'>Nosotros somos un Centro de Investigacion sobre Biodigestiíon Anaerobia, Residuos Urbanos, Agua y Composta</h1>
      </div>

      <div className='m-10 '>
        <div className='items-center justify-between sm:flex'>
          <img className="sm:w-1/2" src={IMAGES.recycleAbout}></img>

          
          <div className=''>
            <h1 className='flex items-center mb-2 text-4xl underline sm:mx-40 underline-offset-4'>Nuestra Meta</h1>
            <h1 className='flex items-center sm:text-xl sm:mx-40'>Educar y profesionalizar a los empleados de empresas que gestionan sus propios residuos, así como de todos los funcionarios municipales, estatales y federales que están relacionados con temas de RSU, compostas provenientes de residuos organicos y energías a partir de las fracciones orgánicas e inorgánias de los RSU.</h1>
          </div>
        </div>
      </div>

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
