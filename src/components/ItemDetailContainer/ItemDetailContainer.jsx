import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../../data/productos'
import { listarArray } from '../helpers/listarArray'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    //llamada a la API
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState(false)
    
    
    useEffect(() => {
        setLoading(true)
        listarArray(productos)
        .then((res) => {
            setItems(res.find (prod => prod.id === '1'))
        })
        .catch((err) => console.log(err))
        .finally(() => {
            setLoading(false)
        })
        
    },[])

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
