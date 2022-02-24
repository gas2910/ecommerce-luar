import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="titular-main" >LUAR</h2>
        <NavBar/> 
      </header>
      <ItemListContainer greeting = 'BIENVENIDO!!'/>
    </div>
    
  );
}

export default App;
