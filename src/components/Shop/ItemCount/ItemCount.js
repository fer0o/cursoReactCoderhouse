import React, { useState } from 'react'

const ItemCount = ({ initial, product }) => {
  const [cantidad, setCantidad] = useState(initial)

  const addProduct = () => {
    if (cantidad < product.stock) {
      setCantidad(cantidad + 1)
    }
  }
  const resProduct = () => {
    if (cantidad > initial) {
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
          onClick={() =>
            alert(`Agregaste ${cantidad} ${product.nombre} al carrito`)
          }
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
