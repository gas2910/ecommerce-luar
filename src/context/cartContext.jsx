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

return (
    <CartContext.Provider value = {{
        cartList,
        agregarAlCarrito,
        vaciarCarrito
    }}>    
        {children}
    </CartContext.Provider>
)

}

export default CartContextProvider

