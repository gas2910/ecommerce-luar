import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider ({children}) {
const [cartList, setCartList] = useState([])

const agregarAlCarrito = (item) => {
    setCartList([...cartList, item])
}

const vaciarCarrito = () =>{
    setCartList([])
}

const sumaTotal = () => {
    
}

const eliminarItem = () =>{

}

const terminarCompra = () =>{

}

return (
    <CartContext.Provider value = {{
        cartList,
        agregarAlCarrito,
        vaciarCarrito,
        sumaTotal,
        eliminarItem,
        terminarCompra
    }}>    
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider

