import React from 'react'
import IMAGES from '../Images'
import "../Startpage/StartPage.css"

export default function About() {
  return (
    <div className='mb-80 m-10 '>
      <div className='m-10'>
        <h1 className='flex justify-center sm:mx-40 text-3xl sm:text-6xl' id="about">Quienes Somos</h1>
        <span className="flex justify-center" id="quienesSomos"></span>
        <h1 className='flex justify-center text-center sm:mx-40 text-2xl sm:text-3xl'>Nosotros somos un Centro de Investigacion sobre Biodigestiíon Anaerobia, Residuos Urbanos, Agua y Composta</h1>
      </div>

      <div className='m-10 '>
        <div className='sm:flex justify-between items-center'>
          <img className="sm:w-1/2" src={IMAGES.recycleAbout}></img>

          
          <div className=''>
            <h1 className='flex  items-center sm:mx-40 text-4xl underline underline-offset-4 mb-2'>Nuestra Meta</h1>
            <h1 className='flex  items-center sm:text-xl sm:mx-40'>Educar y profesionalizar a los empleados de empresas que gestionan sus propios residuos, así como de todos los funcionarios municipales, estatales y federales que están relacionados con temas de RSU, compostas provenientes de residuos organicos y energías a partir de las fracciones orgánicas e inorgánias de los RSU.</h1>
          </div>
        </div>
      </div>

      <div className='m-10'>
        <div className='sm:flex justify-center'>
          <div>
            <h1 className='flex items-center sm:mx-40 text-3xl underline underline-offset-8 mb-2'>Como Logramos esa Meta</h1>
            <h1 className='flex items-center sm:mx-40 text-xl sm:text-1xl'>En CIBRUC estamos comprometidos en realizar cambio a traves de...</h1>
            
            <div id="listAbout" className='sm:grid grid-cols-2  items-start sm:ml-40'>
              <ul className='list-disc'>
                <li className='sm:mr-5 sm:mt-4 mt-4'>Talleres y Cursos de Capacitación</li>
                <li className='sm:mr-5 sm:mt-8 mt-4'>Estudios de caracterización de Residuos</li>
                <li className='sm:mr-5 sm:mt-4 mt-4'>Investigaciones Medioambientales</li>
                <li className='sm:mr-5 sm:mt-4 mt-4'>Proyectos Ejecutivos de RSU</li>
                <li className='sm:mr-5 sm:mt-4 mt-4'>Revisión y Opiniones técnicas de Technologías de Tratamientos de RSU</li>
              </ul>

              <ul className='list-disc'>
                <li className='sm:mt-4 sm:ml-1 mt-4'>Implementación de Proyectos de Biodigestión de Proyectos de Biodigestión Anaerobia</li>
                <li className='sm:mt-2 sm:ml-1 mt-4'>Implementación de Proyectos de Composta y Fertilizante</li>
                <li className='sm:mt-4 sm:ml-1 mt-4'>Implementación de Proyectos de Combustible Derivado de Residuos</li>
                <li className='sm:mt-8 sm:ml-1 mt-4'>Asesoría a Municipios, Entidades Federativas y funcionarios gubernamentales.</li>
              </ul>
            </div>
          </div>
          <img className='sm:w-1/2' src={IMAGES.goalsAbout}></img>
          
        </div>
        
      </div>
    </div>
  )
}
