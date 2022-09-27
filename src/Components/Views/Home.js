import "../../App.css"
import "../Startpage/StartPage.css"
import React from "react";
import { useState, useEffect } from "react";

import Header from "../Startpage/Header";
import ModalBtn from "../Startpage/Phoneview/ModalBtn";
import Startbody from "../Startpage/Startbody";
import About from "../Quienes Somos/About";
import SuperSER from "../Startpage/SuperSER";
import Blog from "../Startpage/Blog";
import Contact from "../Contacto/Contact";
import Footer from "../Startpage/Footer";
import NuestraMeta from "../Quienes Somos/NuestraMeta";
import CumplicionMeta from "../Quienes Somos/CumplicionMeta";



export default function Home() {
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
      <div id="headerStartView">
        {isDesktop ? (
          <Header />
        ) : (
          <ModalBtn />
        )}

        <Startbody />
      </div>

      <NuestraMeta />
      <CumplicionMeta />
      <SuperSER />
      <Blog />
      <Contact />

      <Footer />

    </>
      
    
  );
}



