import "./App.css"
import React from 'react'
import Home from "./Components/Views/Home";

import { Routes, Route } from "react-router-dom";
// import Contacto from "./Components/Views/Contacto";

export default function App() {
  return (
    <Routes>
      <Route path ="/" element = { <Home />}/>
    </Routes>
  )
}
