import { useCartContext } from "../../context/cartContext"

function Cart() {
    const {cartList, vaciarCarrito} = useCartContext()
    console.log(cartList)

  return (  
    <div>
        carrito
        {cartList.map(item => <li>{item.nombre} {item.cantidad}</li>)}
        <button onClick = {vaciarCarrito} >Vaciar carrito</button>
    </div>
    
  )
}

export default Cart