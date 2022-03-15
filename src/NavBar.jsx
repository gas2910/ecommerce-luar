import React from 'react'
import './css/NavBar.css'
import CarWidget from './components/CarWidget/CarWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="NavBar">  
        <nav>
            <ul id="lista-nav">
                <li><NavLink to = "/" id="boton-inicio"> INICIO </NavLink></li>
                <li><NavLink to = "categoria/Sal Marina" id="boton-productos" className="margin-nav" >SAL</NavLink></li>
                <li><NavLink to = "categoria/Salsas Deshidratadas" id="boton-enlaces" className="margin-nav" >SALSAS</NavLink></li>
                <li><NavLink to = "categoria/Azucar Saborizada" id="boton-recetas" className="margin-nav" >AZUCAR</NavLink></li>
                <li><NavLink to = "categoria/Te en Hebras" id="boton-contacto" className="margin-nav" >TE</NavLink></li>
                <li><NavLink to = "categoria/Cerámica Artesanal" id="boton-contacto" className="margin-nav" >CERÁMICA</NavLink></li>
                <li><NavLink to = "cart" id="carrito" className="margin-nav"><CarWidget/></NavLink></li>  
            </ul> 
        </nav>
        
    </div>
  )
}

export default NavBar