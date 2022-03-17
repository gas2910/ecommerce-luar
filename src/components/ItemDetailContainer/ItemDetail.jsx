import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({items}) => {
    const {img, nombre, precio, caracteristicas, stock} = items
    const onAdd = (cant) => {}

    const InputCount = () => {
        return(
            <Link to = '/cart'>
                <button onClick={() => console.log('ir al carrito')}>Ir al carrito</button>
            </Link>
        )
    }
    
    const ButtonCount = ({handleInter}) => {
        return (
            <button onClick={handleInter}>Agregar al carrito</button>
        )
    }
    
    const CambioBoton = () => {
        const[inputType, setInputType] = useState('button')
    
        const handleInter = () => {
            setInputType('input')
        }
        return (
            <div>
                {
                    inputType === 'button' ? 
                        <ButtonCount handleInter={handleInter} />
                    : 
                        <InputCount />
                }
            </div>
        )
    }

    return (
        <div>
            <img src={img} alt="" />
            <div>{nombre}</div>
            <div>Precio: {precio}</div>
            <div>stock disponible: {stock}</div>
            <div>{caracteristicas}</div>
            <ItemCount initial = {1} stock = {stock} onAdd = {onAdd}/>
            {<CambioBoton/>}
        </div>
    )
}

export default ItemDetail