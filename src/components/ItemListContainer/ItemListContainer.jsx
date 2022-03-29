import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { productos } from '../../data/productos';

import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

import { listarArray } from '../helpers/listarArray';
import TituloApp from '../TituloApp/TituloApp';
import { ItemList } from './ItemList';
 

function ItemListContainer ({greeting}) { 
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoriaId} = useParams()

    useEffect(() =>{
        if (categoriaId){
        // setLoading(true)
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
        getDocs(queryFilter)
        .then(resp => setItems(resp.docs.map(item => ({id: item.id, ...item.data()}) )) )
        // .catch((err) => console.log(err))
        // .finally(() => {setLoading(false)})

        }else{
        
            const db = getFirestore()
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)
            .then(resp => setItems(resp.docs.map(item => ({id: item.id, ...item.data()}) )) )
            console.log(queryCollection)
            // .catch((err) => console.log(err))
            // .finally(() => {setLoading(false)})
        }

        
    },[categoriaId])

//     useEffect(() => {
//         if (categoriaId){
//             setLoading(true)
//             listarArray(productos)
//             .then((res) => {
//             setItems(res.filter(prod =>prod.categoria===categoriaId))
//             })
//             .catch((err) => console.log(err))
//             .finally(() => {
//                 setLoading(false)
//             })

//         }else{
  
//             setLoading(true)
//             listarArray(productos)
//             .then((res) => {
//             setItems(res)
//             })
//             .catch((err) => console.log(err))
//             .finally(() => {
//                 setLoading(false)
//             })
//         }
//    },[categoriaId])


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






  

