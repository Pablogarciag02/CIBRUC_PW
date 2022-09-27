import { useState, useEffect } from "react";
import React from "react";
import NuestraMeta from "../Quienes Somos/NuestraMeta";
import SMNuestraMeta from "../Startpage/Phoneview/SMNuestraMeta";


export default function About() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650)
    }
  return (
    <>
    {isDesktop ? (
        <NuestraMeta />
    ) : (
        <SMNuestraMeta />
    )}
    </>

  )
}
