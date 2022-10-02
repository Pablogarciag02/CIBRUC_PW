import { motion } from 'framer-motion'
import React from 'react'
import IMAGES from '../Images'
import "../Startpage/StartPage.css"


export default function NuestraMeta() {
  return (
    <div className='mb-10 ' id='nuestraMeta'>
    <div>
      <span id="quienesSomos"></span>
      <div className=''>
        <motion.h2 className='flex justify-center text-3xl sm:mx-40 sm:text-6xl'
        initial={{x:500}}
        whileInView={{x:0}}
        transition={{duration: 1}}
        viewport={{once:true}}
        
        >Quienes Somos</motion.h2>
        <span className="flex justify-center" ></span>
        <motion.h1 className='flex justify-center text-2xl text-center sm:mx-40 sm:text-3xl'
        initial={{x:-500}}
        whileInView={{x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        
        >Nosotros somos un Centro de Investigación sobre Biodigestíon Anaerobia, Residuos Urbanos, Agua y Composta</motion.h1>
      </div>
    </div>

      <div className='m-10 '>
        <div className='items-center justify-between sm:flex'>
          <motion.img 
          initial={{x:-500}}
          whileInView={{x:0}}
          transition={{duration: 3}}
          viewport={{once:true}}
          className="sm:w-1/2" src={IMAGES.recycleAbout}></motion.img>

          
          <motion.div
          initial={{x:500}}
          whileInView={{x:0}}
          transition={{duration: 3}}
          viewport={{once:true}}
          
          className=''>
            <h1 className='flex items-center mb-2 text-4xl underline lg-mx-20 xl:mx-40 underline-offset-4'>Nuestra Meta</h1>
            <h1 className='flex items-center sm:text-xl lg-mx-20 xl:mx-40'>Educar y profesionalizar a los empleados de empresas que gestionan sus propios residuos, así como de todos los funcionarios municipales, estatales y federales que están relacionados con temas de RSU, compostas provenientes de residuos organicos y energías a partir de las fracciones orgánicas e inorgánicas de los RSU.</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
