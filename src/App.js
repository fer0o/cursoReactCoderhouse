import './App.css'
// import CartWidget from './components/CartWidget'
import EquiposContainer from './components/equipos/EquiposContainer'
// import ItemCount from './components/ItemCount'
// import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
// import NewCard from './components/NewCard'
// import Saludo from './components/Saludo'

function App () {
  const onAdd = qty => {
    alert(`Has agregado ${qty} de Items al carrito de compra`)
  }
  return (
    <div>
      <Navbar />
      {/* <Saludo name='fer' apellido='medellin' edad='29' />
      <ItemListContainer /> */}
      {/* <NewCard otroComponente={Saludo}></NewCard> */}
      {/* <div className='pb-10'>
        <ItemCount onAdd={onAdd} initial={0} stock={5} />
      </div> */}
      <div>
        <EquiposContainer />
      </div>
    </div>
  )
}

export default App
