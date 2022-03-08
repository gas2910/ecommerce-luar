import React from "react"
import ItemCount from "../ItemCount/ItemCount"

export const Item = ({nombre, categoria, caracteristicas, precio, img, stock}) => {
    const onAdd = (cant) => {}
    return(
        <div>
            <div>{nombre}</div>
            <img src={img} alt="" />
            <div>{categoria}</div>
            <div>{precio}</div>
            <button>Ver caracteristicas</button>
            <div>stock disponible: {stock}</div>
            <ItemCount initial = {1} stock = {stock} onAdd = {onAdd}/>
        </div>
    )
}
