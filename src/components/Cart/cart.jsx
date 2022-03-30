import { useCartContext } from "../../context/cartContext"

function Cart() {
    const {cartList, vaciarCarrito, precioTotal, eliminarItem, terminarCompra} = useCartContext()
    console.log(cartList)

  return ( 
    
    <div>
        carrito
        {cartList.map(item => <li key = {item.id}>{item.nombre} {item.cantidad} <button onClick = {() => eliminarItem (item.id)} >Eliminar</button></li>)}
        <h3>Total de la compra {precioTotal()}</h3>
        <button onClick = {vaciarCarrito} >Vaciar carrito</button> <br/>
        <button onClick = {terminarCompra} >Terminar compra</button>
    </div>
    
  )
}

export default Cart