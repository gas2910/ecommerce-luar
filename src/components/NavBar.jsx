import React from 'react'
import '../css/NavBar.css'
import CarWidget from './CarWidget/CarWidget'

const NavBar = () => {
  return (
    <div className="NavBar">  
        <nav>
            <ul id="lista-nav">
                <li><a id="boton-inicio" href="##">INICIO</a></li>
                <li><a id="boton-productos" className="margin-nav" href="##">PRODUCTOS</a></li>
                <li><a id="boton-enlaces" className="margin-nav" href="##">ENLACES</a></li>
                <li><a id="boton-recetas" className="margin-nav" href="##">RECETAS</a></li>
                <li><a id="boton-contacto" className="margin-nav" href="##">CONTACTO</a></li>
                <li><a id="carrito" className="margin-nav" href="##"><CarWidget/></a></li>  
            </ul> 
        </nav>
        
    </div>
  )
}

export default NavBar