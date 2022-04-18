import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './NavBar'
import './App.css';
import Cart from './components/Cart/Cart';
import CartContextProvider from './context/cartContext';
import TituloApp from './components/TituloApp/TituloApp';


function App() {

  return (
    <CartContextProvider>
    
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h2 className="titular-main" ><Link to = "/"><TituloApp titulo= 'LUAR'/></Link> </h2>
            <NavBar/> 
          </header>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = 'BIENVENIDO!!'/>}/>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting = 'BIENVENIDO!!'/>}/>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
            <Route path='/*' element={<Navigate to='/' replace />}/>       
            <Route path='/cart' element={<Cart/>}/>  
          </Routes>
        </div>
      </BrowserRouter>

    </CartContextProvider>  
       
  );
}

export default App;
