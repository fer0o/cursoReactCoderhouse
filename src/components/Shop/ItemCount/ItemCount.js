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
    <>
      <div>
        <div>
          <button onClick={resProduct}>-</button>
          <label>{cantidad}</label>
          <button onClick={addProduct}>+</button>
        </div>

        <div>
          <button
            onClick={() =>
              alert(`Agregaste ${cantidad} ${product.nombre} al carrito`)
            }
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  )
}

export default ItemCount
