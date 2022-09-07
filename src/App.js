import "./App.css"
import React from 'react'
import Home from "./Components/Views/Home";

import { Routes, Route, Router } from "react-router-dom";
import Quienessomos from "./Components/Views/Quienessomos";
import QuieroSER from "./Components/Views/QuieroSER";
import Contacto from "./Components/Views/Contacto";

export default function App() {
  return (
    <Routes>
      
      <Route path ="/CIBRUC_PW" element = { <Home />}/>
      <Route path ="/QuienesSomos" element = { <Quienessomos />} />
      <Route path ="/QuieroSER" element = {<QuieroSER />} />
      <Route path = "/Contacto" element = {<Contacto />} />
    </Routes>
  )
}
