import carrito from "./SeekPng.com_carrinho-de-compras-png_4109493.png"
import './CarWidget.css'
import { useCartContext } from "../../context/cartContext"


function CarWidget() {
    const {cartList} = useCartContext()
    return (   
        <img src= {carrito} alt=""/>
        
    )
           
}

export default CarWidget