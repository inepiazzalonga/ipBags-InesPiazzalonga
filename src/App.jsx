import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Cart } from './Components/Cart/Cart'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

import { NavBAr } from './Components/NavBar/NavBar'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBAr/>
      <Routes>
        <Route path="/" element = {<ItemListContainer/> }/>
        <Route path='/detail/:id' element = { <ItemDetailContainer/> } />
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>        
      </Routes>
    </BrowserRouter>

    </>
  
  )
}

export default App
