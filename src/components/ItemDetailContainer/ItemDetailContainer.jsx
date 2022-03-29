import { getFirestore, doc, getDoc,  } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../../data/productos'
import { listarArray } from '../helpers/listarArray'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    //llamada a la API
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(false)
    const {detalleId} = useParams ()
    console.log(detalleId)
    
    // useEffect(() => {
    //     setLoading(true)
    //     listarArray(productos)
    //     .then((res) => {
    //         setItems(res.find (prod => prod.id === detalleId))
    //     })
    //     .catch((err) => console.log(err))
    //     .finally(() => {
    //         setLoading(false)
    //     })
        
    // },[detalleId])

    useEffect(() =>{
        // setLoading(true)
        const db = getFirestore()
        const queryDb = doc(db, 'productos', detalleId)
        getDoc(queryDb)
        .then(resp => setItems({id:resp.id, ...resp.data()}) )
        console.log(queryDb)
        // .catch((err) => console.log(err))
        // .finally(() => {setLoading(false)})
    },[detalleId])

  return (
    <div>
        {
            loading? 
            <div>Cargando...</div> 
            :
            <ItemDetail items = {items}/>
        }
        
    </div>
  )
}

export default ItemDetailContainer
