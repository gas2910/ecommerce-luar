import { useCartContext } from "../../context/cartContext"

function Cart() {
    const {cartList, vaciarCarrito, sumaTotal, eliminarItem, terminarCompra} = useCartContext()
    console.log(cartList)

  return ( 
    
    <div>
        carrito
        {cartList.map(item => <li>{item.nombre} {item.cantidad} <button onClick = {eliminarItem} >Eliminar</button></li>)}
        <h3>Total de la compra {sumaTotal}</h3>
        <button onClick = {vaciarCarrito} >Vaciar carrito</button> <br/>
        <button onClick = {terminarCompra} >Terminar compra</button>
    </div>
    
  )
}

export default Cart