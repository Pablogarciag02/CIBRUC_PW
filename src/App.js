import "./App.css"
import React from 'react'
import { useState, useEffect } from "react";
import Header from './Components/Startpage/Header';
import ModalBtn from "./Components/Startpage/Phoneview/ModalBtn";
import Startbody from "./Components/Startpage/Startbody";
import SuperSER from "./Components/Startpage/SuperSER";
import Home from "./Components/Views/Home";

import { Routes, Route, useLocation } from "react-router-dom";
import Quienessomos from "./Components/Views/Quienessomos";
import QuieroSER from "./Components/Views/QuieroSER";
import Contacto from "./Components/Views/Contacto";

export default function App() {
  const location = useLocation();
  const currentPath = location.pathname
  return (
    <Routes>
      
      <Route path ="/" element = { <Home />}/>
      <Route path ="/QuienesSomos" element = { <Quienessomos />} />
      <Route path ="/QuieroSER" element = {<QuieroSER />} />
      <Route path = "/Contacto" element = {<Contacto />} />
    </Routes>
  )
}
