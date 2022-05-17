import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({ product }) => {
  const { deleteFromCart } = useCartContext()
  return (
    <div>
      <div>
        {/* imagen */}
        <img src={product.jersey} />
      </div>
      {/* detalles sin css */}
      <div>
        <h4>
          {`${product.marca} |`} <span>{`${product.quantity} unidades`}</span>
        </h4>
        <h1 className='text-uppercase mb-0'>{product.nombre}</h1>
        <h4 className='text-uppercase'>{`$${product.precio *
          product.quantity}`}</h4>
        <p>{`$${product.precio} c/u`}</p>
        <button
          className='btn btn-danger'
          onClick={() => deleteFromCart(product)}
        >
          Eliminar del Carrito
        </button>
      </div>
    </div>
  )
}

export default CartItem
