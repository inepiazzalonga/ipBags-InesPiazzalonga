import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
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
        <Route path='/cart'/>        
      </Routes>
    </BrowserRouter>

    </>
  
  )
}

export default App
