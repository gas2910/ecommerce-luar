import React from "react"
import { Link } from "react-router-dom"


export const Item = ({id, nombre, img}) => {
    
    return(
        <div>
            <img src={img} alt="" />
            <div>{nombre}</div>
            <Link to = {`detalle/${id}`}>
                <button>Ver caracteristicas</button>
            </Link>
        </div>
    )
}
