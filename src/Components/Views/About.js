import { useState } from "react";
import React from "react";
import NuestraMeta from "../Quienes Somos/NuestraMeta";
import SMNuestraMeta from "../Startpage/Phoneview/SMNuestraMeta";

//Animations need to be diferent depending on viewport size. Do to this, this component is created to change between both types of viewport sizes.
export default function About() {
  const [isDesktop] = useState(window.innerWidth > 650);
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
