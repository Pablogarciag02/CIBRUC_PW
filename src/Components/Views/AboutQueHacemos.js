import { useState } from "react";
import React from "react";
import CumplicionMeta from '../Quienes Somos/CumplicionMeta';
import SMCumplicionMeta from "../Startpage/Phoneview/SMCumplicionMeta";

//Animations need to be diferent depending on viewport size. Do to this, this component is created to change between both types of viewport sizes.
export default function AboutQueHacemos() {
  const [isDesktop] = useState(window.innerWidth > 650);
  return (
    <div>
        {isDesktop ? (
          <CumplicionMeta />
        ) : (
          <SMCumplicionMeta />
        )}
    </div>
  )
}
