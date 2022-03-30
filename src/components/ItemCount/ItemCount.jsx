import {useState} from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const agregar = () => {
        onAdd (count)
    }
    
    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }else{
            alert('No hay más stock')
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }
   
    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button> <br />
            <button onClick={agregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount