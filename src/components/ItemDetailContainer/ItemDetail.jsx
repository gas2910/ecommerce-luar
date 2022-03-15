import React from "react";



const ItemDetail = ({items}) => {
    const {img, nombre, precio, caracteristicas} = items

    return (
        <div>
            <img src={img} alt="" />
            <div>{nombre}</div>
            <div>{precio}</div>
            <div>{caracteristicas}</div>
        </div>
    )
}

export default ItemDetail