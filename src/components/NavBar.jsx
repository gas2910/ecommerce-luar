import React from 'react'
import '../css/NavBar.css'

const NavBar = () => {
  return (
    <div className="NavBar">  
        <ul id="lista-nav">
            <li><a id="boton-inicio" href="">INICIO</a></li>
            <li><a id="boton-productos" className="margin-nav" href="">PRODUCTOS</a></li>
            <li><a id="boton-enlaces" className="margin-nav" href="">ENLACES</a></li>
            <li><a id="boton-recetas" className="margin-nav" href="">RECETAS</a></li>
            <li><a id="boton-contacto" className="margin-nav" href="">CONTACTO</a></li>
        </ul> 
    </div>
  )
}

export default NavBar