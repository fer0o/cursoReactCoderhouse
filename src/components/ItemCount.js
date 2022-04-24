import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock}) => {
  // let suma = 0
  // console.log('aqui hay un componente estado');

  //iniciador se lee el valor, se escribe valor = useState (valor inicial del estado)
  const [count, setCount] = useState(initial)
  //recibe 2 parametros. primero una funcion y el segudo un array vacio
  useEffect(()=>{
      console.log('[useEffect] el componente se monto ');
  },[])
  useEffect(()=>{
    console.log('[useEffect]  el estado cambio.... ');
},[count])


  const addHandler = () => {
    console.log('se esta sumando')
    // suma= suma+1
    setCount(parseInt(count) + 1)
  }
  const minHandler = () => {
    console.log('se esta restando')
    // suma= suma+1
    setCount(parseInt(count) - 1)
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
