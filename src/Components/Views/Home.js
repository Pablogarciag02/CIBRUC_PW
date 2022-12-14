import "../../App.css"
import "../Startpage/StartPage.css"
import React from "react";
import { useState, useEffect } from "react";


import Header from "../Startpage/Header";
import ModalBtn from "../Startpage/Phoneview/ModalBtn";
import Startbody from "../Startpage/Startbody";
import SuperSER from "../Startpage/SuperSER";
import Footer from "../Startpage/Footer";
import About from "./About";
import AboutQueHacemos from "./AboutQueHacemos";



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

      <About />

      <AboutQueHacemos />

      <SuperSER />

      <Footer />

    </>
      
    
  );
}



