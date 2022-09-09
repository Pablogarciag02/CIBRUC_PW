import React from 'react'
import { useState, useEffect } from "react";

import Header from '../Startpage/Header'
import ModalBtn from '../Startpage/Phoneview/ModalBtn';
import Footer from '../Startpage/Footer';


export default function Contacto() {
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