import carrito from "./SeekPng.com_carrinho-de-compras-png_4109493.png"
import './CarWidget.css'
import { NavLink } from "react-router-dom"

function CarWidget() {
    return (
    <NavLink to = "/cart">
        <img src= {carrito} alt=""/>
    </NavLink> 
    
    )
}

export default CarWidget