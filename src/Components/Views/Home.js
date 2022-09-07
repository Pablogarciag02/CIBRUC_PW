import "../../App.css"
import React from "react";
import { useState, useEffect } from "react";

import HeaderInicio from "../Startpage/HeaderInicio";
import ModalBtn from "../Startpage/Phoneview/ModalBtn";
import Startbody from "../Startpage/Startbody";
import SuperSER from "../Startpage/SuperSER";
import Footer from "../Startpage/Footer";


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
      {isDesktop ? (
        <HeaderInicio />
      ) : (
        <ModalBtn />
      )}

      <Startbody />
      <SuperSER />
      <Footer />

    </>
      
    
  );
}



