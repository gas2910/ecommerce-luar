import React, { useEffect, useState } from 'react'
import { productos } from '../../data/productos';
import { listarArray } from '../helpers/listarArray';
import ItemCount from '../ItemCount/ItemCount';
import TituloApp from '../TituloApp/TituloApp';
import { ItemList } from './ItemList';


function ItemListContainer ({greeting}) { 
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        listarArray(productos)
        .then((res) => {
            setItems(res)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })

   },[])

    return (
        <div>
           <TituloApp/>  
           <h2>{greeting}</h2> 
           <div>
               {
                    loading? 
                   <div>Cargando...</div> 
                   :
                   <ItemList items = {items}/>
               }
           </div>
           
        </div>
      );
}

export default ItemListContainer






  

