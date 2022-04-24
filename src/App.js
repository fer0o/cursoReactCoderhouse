import './App.css'
import CartWidget from './components/CartWidget'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import NewCard from './components/NewCard'
import Saludo from './components/Saludo'

function App () {
  return (
    <div>
      <Navbar />
      {/* <Saludo name='fer' apellido='medellin' edad='29' />
      <ItemListContainer /> */}
      <NewCard otroComponente={Saludo}></NewCard>
      <ItemCount initial ='0' stock='5' />
    </div>
    // <div className='App'>
    //   <header className='App-header'>
    //     <img
    //       src={'https://miro.medium.com/max/1156/1*NYoJyNtt8k0vykHEYmih9A.png'}
    //     />
    //     <p className='text-3xl font-bold underline'>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p className='text-red-700'>Agregando tailwind</p>
    //     <a
    //       className='App-link'
    //       href='https://reactjs.org'
    //       target='_blank'
    //       rel='noopener noreferrer'
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  )
}

export default App
