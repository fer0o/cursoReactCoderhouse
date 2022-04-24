import { useState } from 'react'

const ItemCount = () => {
  // let suma = 0
  // console.log('aqui hay un componente estado');

  //iniciador se lee el valor, se escribe valor = useState (valor inicial del estado)
  const [count, setCount] = useState(0)

  const addHandler = () => {
    console.log('se esta sumando')
    // suma= suma+1
    setCount(count + 1)
  }
  const minHandler = () => {
    console.log('se esta restando')
    // suma= suma+1
    setCount(count - 1)
  }

  return (
    <div>
      <h1>Contador</h1>
      <button onClick={minHandler}> - </button>
      <strong> {count} </strong>
      <button onClick={addHandler}> + </button>
    </div>
  )
}

export default ItemCount
