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
      <div className='flex justify-center border-2 w-60 ml-8'>
        <span>
          stock:
          <label className='font-bold m-2'>{stock}</label>
        </span>
      </div>
      <div className='grid grid-cols-3 m-8 border-2'>
        <button
          className='flex justify-start text-2xl font-bold'
          onClick={resProduct}
        >
          -
        </button>
        <label className='flex justify-center text-2xl font-bold'>
          {cantidad}
        </label>
        <button
          className='flex justify-end text-2xl font-bold'
          onClick={addProduct}
        >
          +
        </button>
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
