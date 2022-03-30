import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
const [cartList, setCartList] = useState([])

const agregarAlCarrito = (item) => {
    setCartList([...cartList, item])
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
    return cartList.reduce((acum, prod) => acum += prod.cantidad , 0)// acum = acum + cantidad
}

const terminarCompra = () =>{

}

return (
    <CartContext.Provider value = {{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        precioTotal,
        sumaItems,
        eliminarItem,
        terminarCompra
    }}>    
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider

