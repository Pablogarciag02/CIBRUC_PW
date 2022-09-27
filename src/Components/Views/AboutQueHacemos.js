import { useState, useEffect } from "react";
import React from "react";
import CumplicionMeta from '../Quienes Somos/CumplicionMeta';
import SMCumplicionMeta from "../Startpage/Phoneview/SMCumplicionMeta";

export default function AboutQueHacemos() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650)
    }
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
