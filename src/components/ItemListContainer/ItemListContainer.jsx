import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import TituloApp from '../TituloApp/TituloApp';



function ItemListContainer ({greeting}) { 
    const onAdd = (cant) => {}
    return (
        <div>
           <TituloApp/>  
           <h2>{greeting}</h2> 
           <ItemCount initial = {1} stock = {10} onAdd={ onAdd } />          
        </div>
      );
}

export default ItemListContainer






  

