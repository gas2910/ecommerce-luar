import {useState} from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)
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
    // const agregar = () => {
    //     onAdd( count )
    // }
    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button><br />
        </div>
    )
}

export default ItemCount