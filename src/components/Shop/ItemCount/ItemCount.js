import React, { useState } from 'react'

const ItemCount = ({ stock, onAdd }) => {
  const [cantidad, setCantidad] = useState(0)

  const addProduct = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }
  const resProduct = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div>
      <div>
        <button onClick={resProduct}>-</button>
        <label>{cantidad}</label>
        <button onClick={addProduct}>+</button>
      </div>

      <div>
        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[300px]'
          onClick={() => onAdd(cantidad)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
