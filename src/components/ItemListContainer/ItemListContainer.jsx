import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../../data/productos';
import {getFirestore, doc, getDoc} from '../../firebase/config';
import { listarArray } from '../helpers/listarArray';
import TituloApp from '../TituloApp/TituloApp';
import { ItemList } from './ItemList';
 

function ItemListContainer ({greeting}) { 
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId){
            setLoading(true)
            listarArray(productos)
            .then((res) => {
            setItems(res.filter(prod =>prod.categoria===categoriaId))
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

        }else{
  
            setLoading(true)
            listarArray(productos)
            .then((res) => {
            setItems(res)
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })
        }
   },[categoriaId])

//    useEffect(() =>{
//        const db = getFirestore()
//        const queryDb = doc(db, 'productos', '4grXjb1081u2oIC4SgZi')
//        getDoc(queryDb)
//        .then(resp => console.log(resp))
//        console.log(queryDb)
//    },[])

   console.log(categoriaId)

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






  

