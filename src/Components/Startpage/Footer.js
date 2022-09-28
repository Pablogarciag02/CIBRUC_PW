import React from 'react'
import IMAGES from '../Images'

export default function Footer() {
  return (
    <>
      <div className='justify-center mt-20 sm:flex sm:justify-around bg-green' id="contacto">
          <img className ="w-48 m-auto sm:m-0" src={IMAGES.mainLogo}></img>
          <div className='flex justify-center ml-6 sm:items-center sm:m-0'>
            <a className='mx-4' href="https://www.facebook.com/CCIBRUC" target="_blank"><img className="w-8" src={IMAGES.facebook}></img></a>
            <a className='mx-4' href="https://www.instagram.com/cibruc/" target="_blank"><img className="w-8" src={IMAGES.instagram}></img></a>
            <a className='mx-4' href="https://twitter.com/cibruc" target="_blank"><img className="w-8" src={IMAGES.twitter}></img></a>
            <a className='mx-4' href="https://www.tiktok.com/@cibruc" target="_blank"><img className="w-8" src={IMAGES.tiktok}></img></a>
          </div>
      </div>
      <div className='pt-8 pb-40'>
        <a href = "mailto: contacto.cibruc@gmail.com"><p className='text-2xl text-center underline'>Mandanos un Correo</p></a>
      </div>
    </>
  )
}
