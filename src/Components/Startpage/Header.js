import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <div>
        <div className="flex justify-end mt-14 mr-24  invisible lg:visible">
            <span className = "mr-8 hover:underline"><a href="mailto:pgarciag566@gmail.com">Inicio</a></span>
            <span className = "mr-8 hover:underline"><a href="#" target="_blank">Quienes Somos</a></span>
            <span className = "mr-8 hover:underline"><a href="#" target="_blank">Quiero Ser un Super SER</a></span>
            <span className = "mr-8 hover:underline"><a href="#" target="_blank">Contacto</a></span>
        </div>
    </div>
  )
}
