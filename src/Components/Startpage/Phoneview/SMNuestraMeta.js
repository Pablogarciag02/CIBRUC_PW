import React from 'react'
import IMAGES from '../../Images'
import {motion} from "framer-motion"


export default function SMNuestraMeta() {
  return (
    <div className='pb-10 ' id='nuestraMeta'>
        <div>
            <div className=''>
                <motion.h2 className='flex justify-center text-3xl sm:mx-40 sm:text-6xl' id="about"
                initial={{x:200}}
                whileInView={{x:0}}
                transition={{duration: 1}}
                viewport={{once:true}}
                
                >Quienes Somos</motion.h2>
                <span className="flex justify-center" id="quienesSomos"></span>
                <motion.h1 className='flex justify-center mx-10 text-2xl text-center sm:mx-40 sm:text-3xl'
                initial={{x:-200}}
                whileInView={{x:0}}
                transition={{duration:1}}
                viewport={{once:true}}
                
                >Nosotros somos un Centro de Investigacion sobre Biodigestiíon Anaerobia, Residuos Urbanos, Agua y Composta</motion.h1>
            </div>
        </div>

        <div className='mx-10 '>
            <div className='items-center justify-between sm:flex'>
                <motion.img 
                initial={{x:-200}}
                whileInView={{x:0}}
                transition={{duration: 1.5}}
                viewport={{once:true}}
                className="sm:w-1/2" src={IMAGES.recycleAbout}></motion.img>

                
                <motion.div
                initial={{x:200}}
                whileInView={{x:0}}
                transition={{duration: 2}}
                viewport={{once:true}}
                
                className='pb-2 mt-10 '>
                <h1 className='flex items-center mb-2 text-4xl underline md:mx-10 xl:mx-40 underline-offset-4'>Nuestra Meta</h1>
                <h1 className='flex items-center sm:text-xl md:mx-10 lg:mx-10 xl:mx-40 xl:text-2xl'>Educar y profesionalizar a los empleados de empresas que gestionan sus propios residuos, así como de todos los funcionarios municipales, estatales y federales que están relacionados con temas de RSU, compostas provenientes de residuos organicos y energías a partir de las fracciones orgánicas e inorgánias de los RSU.</h1>
                </motion.div>
            </div>
        </div>
    </div>

    
  )
}
