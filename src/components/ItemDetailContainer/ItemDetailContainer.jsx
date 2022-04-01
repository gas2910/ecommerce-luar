import { getFirestore, doc, getDoc,  } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    //llamada a la API
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(true)
    const {detalleId} = useParams ()
    
    
    useEffect(() =>{
        const db = getFirestore()
        const queryDb = doc(db, 'productos', detalleId)
        getDoc(queryDb)
        .then(resp => setItems({id:resp.id, ...resp.data()}) )
        .catch((err) => console.log(err))
        .finally(() => {setLoading(false)})
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
