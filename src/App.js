import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart/Cart'
import AppContextProvider from './components/context/AppContext'
import CartContextProvider from './components/context/CartContext'
import Footer from './components/footer/Footer'

import Navbar from './components/NavBar/Navbar'
import Hero from './components/otros/Hero'
import ItemDetailContainer from './components/Shop/ItemDetail/ItemDetailContainer'
import ItemListContainer from './components/Shop/ItemList/ItemListContainer'
// import CartWidget from './components/CartWidget'
//import EquiposContainer from './components/equipos/EquiposContainer'
// import ItemCount from './components/ItemCount'
// import ItemListContainer from './components/ItemListContainer
// import NewCard from './components/NewCard'
// import Saludo from './components/Saludo'

function App () {
  return (
    <div>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route
                path='/'
                element={<ItemListContainer greetings={<Hero />} />}
              />
              <Route
                path={'/itemListContainer/:categoryId'}
                element={<ItemListContainer />}
              />
              <Route
                path={'itemDetail/:itemId'}
                element={<ItemDetailContainer />}
              ></Route>
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  )
}

export default App
