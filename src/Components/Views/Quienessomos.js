import React from 'react'
import { useState, useEffect } from "react"
import Header from '../Startpage/Header'
import ModalBtn from '../Startpage/Phoneview/ModalBtn'
import IMAGES from '../Images'
import Footer from '../Startpage/Footer'

import { useParams } from "react-router-dom"

export default function Quienessomos() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650)
  };

  useEffect (() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  })
  return (
    <>
      {isDesktop ? (
        <Header />
      ) : (
        <ModalBtn />
      )}
      <Footer />
   

      
        
    </>
  )
}

function Child() {

  let { id } = useParams();
  
  return (
    console.log(id)
  )
}