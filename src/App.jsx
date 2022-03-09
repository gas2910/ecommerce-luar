import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './NavBar'
import './App.css';
import CarWidget from './components/CarWidget/CarWidget';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
          <h2 className="titular-main" >LUAR</h2>
          <NavBar/> 
        </header>
        <Routes>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/' element={<ItemListContainer greeting = 'BIENVENIDO!!'/>}/>
          <Route path='/*' element={<Navigate to='/' replace />}/>       
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
