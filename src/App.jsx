import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Cart } from './Components/Cart/Cart'
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import CartContextProvider from './context/CartContext';
import { NavBAr } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home'
import { LogIn } from './Components/LogIn/LogIn';


function App() {

  return (
    <>
    <BrowserRouter>
      <CartContextProvider>
        <NavBAr/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/shop" element = {<ItemListContainer/> }/>
          <Route path='/shop/detail/:id' element = { <ItemDetailContainer/> } />
          <Route path='/shop/category/:category' element={<ItemListContainer/>}/>
          <Route path='/shop/cart' element={ <Cart/> }/>   
          <Route path='login' element={<LogIn/>}/>
        </Routes>
      </CartContextProvider>
    </BrowserRouter>

    </>
  
  )
}

export default App
