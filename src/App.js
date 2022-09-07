import "./App.css"
import { useState, useEffect } from "react";
import Header from './Components/Startpage/Header';
import ModalBtn from "./Components/Startpage/Phoneview/ModalBtn";
import Startbody from "./Components/Startpage/Startbody";
import SuperSER from "./Components/Startpage/SuperSER";




function App() {
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
        <Header />
      ) : (
        <ModalBtn />
      )}

      <Startbody />
      <SuperSER />

    </>
      
    
  );
}

export default App;
