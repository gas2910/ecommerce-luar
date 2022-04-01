import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/cartContext"

const ItemDetail = ({items}) => {
    const {img, nombre, precio, caracteristicas, stock} = items
    const [count, setCount] = useState(null)
    const {agregarAlCarrito} = useCartContext()
    
    const onAdd = (cant) => {
        setCount(cant)
        agregarAlCarrito({...items, cantidad: cant})
    }
    
    return (
        <div>
            <img src={img} alt="" />
            <div>{nombre}</div>
            <div>Precio: {precio}</div>
            <div>stock disponible: {stock}</div>
            <div>{caracteristicas}</div>
            {   count ? 
                    <Link to = '/cart'>
                        <button>Ir al carrito</button>
                    </Link>
                :

                    <ItemCount initial = {1} stock = {stock} onAdd = {onAdd}/>
                
            }
            
        </div>
    )
}

export default ItemDetail