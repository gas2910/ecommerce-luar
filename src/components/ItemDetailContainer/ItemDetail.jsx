import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = ({img, nombre, precio, caracteristicas}) => {
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