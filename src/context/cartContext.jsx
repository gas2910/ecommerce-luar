import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
const [cartList, setCartList] = useState([])


const agregarAlCarrito = (item) => {
    let productoRepetido = cartList.find(producto => producto.id === item.id)
    if (productoRepetido){
        let newCartList = cartList.map(cartItem => {
            if (cartItem.id === productoRepetido.id){
                productoRepetido.cantidad = cartItem.cantidad + item.cantidad
            }
            return cartItem
        })
        setCartList(newCartList)
    }else{
        setCartList([...cartList, item])
    }
    
}

const eliminarItem= (id) => {
    setCartList( cartList.filter(item => item.id !== id) )
}

const vaciarCarrito = () =>{
    setCartList([])
}

const precioTotal = () => {
    return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
}

const sumaItems = () => {
    return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)
}

return (
    <CartContext.Provider value = {{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        precioTotal,
        sumaItems,
        eliminarItem   
    }}>    
        {children}
    </CartContext.Provider>
)}

export default CartContextProvider

