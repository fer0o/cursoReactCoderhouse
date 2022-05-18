import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart/Cart'
import AppContextProvider from './components/context/AppContext'
import CartContextProvider from './components/context/CartContext'

import Navbar from './components/NavBar/Navbar'
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from './components/Shop/ItemList/ItemListContainer'
// import CartWidget from './components/CartWidget'
//import EquiposContainer from './components/equipos/EquiposContainer'
// import ItemCount from './components/ItemCount'
// import ItemListContainer from './components/ItemListContainer
// import NewCard from './components/NewCard'
// import Saludo from './components/Saludo'

function App () {
  // const onAdd = qty => {
  //   alert(`Has agregado ${qty} de Items al carrito de compra`)
  // }
  return (
    <div>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route
                path='/category/:categoryId'
                element={<ItemListContainer />}
              />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
