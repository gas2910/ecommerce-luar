import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"


function Cart() {
  const {cartList, vaciarCarrito, precioTotal, eliminarItem} = useCartContext()
  const [dataForm, setDataForm] = useState({
    email: '', name: '', phone: ''
  })
  const [id, setId] = useState('')

  if (cartList.length === 0) {
    return (
    <div>
      <h2>CARRITO VACIO</h2>
      <br/>
      <Link to = '/*'>
        <button>VOLVER AL INICIO</button>
      </Link>
      
    </div> 
    )
  }

  const generarOrden= async (e)=>{
    e.preventDefault();
      
    let orden = {}      

    orden.buyer = dataForm
    orden.total = precioTotal();

    orden.productos = cartList.map(cartItem => {
        const id = cartItem.id;
        const nombre = cartItem.nombre;
        const precio = cartItem.precio * cartItem.cantidad;
        if(dataForm.email === '' || dataForm.name === '' || dataForm.phone === '') {
          return(alert("completá tus datos"))
        }else{
          return {id, nombre, precio}  
        } 
    })

    const db = getFirestore()
    const queryCollectionSet = collection(db, 'orders')
    addDoc(queryCollectionSet, orden)
    .then(resp => setId(resp.id))
    .catch(err => console.log(err))
    .finally(() => console.log('termino'))

  }

  const handleChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value
    })
  }
 
  
  return ( 
        
    <div>
          {cartList.map(item => <li key = {item.id}>nombre: {item.nombre} cantidad: {item.cantidad} precio:{item.cantidad*item.precio}<button onClick = {() => eliminarItem (item.id)} >Eliminar</button></li>)}
          <h3>Total de la compra: {precioTotal()}</h3>
          <button onClick = {vaciarCarrito} >Vaciar carrito</button> <br/>
          <form onSubmit={generarOrden}>
            <input 
              type='text' 
              name='name' 
              placeholder='name' 
              value={dataForm.name}
                onChange={handleChange}
            /><br />
            <input 
              type='text' 
              name='phone'
              placeholder='tel' 
              value={dataForm.phone}
                onChange={handleChange}
            /><br/>
            <input 
              type='email' 
              name='email'
              placeholder='email' 
              value={dataForm.email}
                onChange={handleChange}
            /><br/>
                      
            <button>Terminar Compra</button>
            <br/>
            {id.length !== '' && `el id de la compra es: ${id}`}
          </form>
    </div>
        
  )
  
}

export default Cart