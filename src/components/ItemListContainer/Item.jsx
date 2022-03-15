import React from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

export const Item = ({id, nombre, categoria, caracteristicas, precio, img, stock}) => {
    const onAdd = (cant) => {}
    return(
        <div>
            <div>{nombre}</div>
            <img src={img} alt="" />
            <div>{categoria}</div>
            <div>{precio}</div>
            <Link to = {`detalle/${id}`}>
                <button>Ver caracteristicas</button>
            </Link>
            <div>stock disponible: {stock}</div>
            <ItemCount initial = {1} stock = {stock} onAdd = {onAdd}/>
        </div>
    )
}
