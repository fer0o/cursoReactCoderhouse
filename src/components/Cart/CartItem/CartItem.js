import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartItem = ({ product }) => {
  const { deleteFromCart } = useCartContext()
  return (
    <div className='container lg:grid grid-cols-2 gap-1 mx-auto border-2 drop-shadow rounded-lg  m-4'>
      <div className='border-2'>
        {/* imagen */}
        <img className='w-full h-auto p-16' src={product.jersey} />
      </div>
      {/* detalles sin css */}
      <div className='flex flex-col  p-16 text-xl border-2'>
        <div className='lg:mb-8'>
          <h2 className='text-base lg:text-2xl font-bold '>
            Jersey del equipo {` ${product.nombre} `} del año
            {` ${product.modelo} `} de la marca {product.marca}
          </h2>
        </div>
        <div className='p-4 m-4'>
          <h2 className='mb-4'>
            Precio individual: <b>{`$${product.precio} MXN c/u`}</b>
          </h2>
          <h2 className='mb-4'>
            Categoria:
            <b>{` ${product.category} `}</b>
          </h2>
          <h2 className='mb-4'>
            Modelo:
            <b>{` ${product.modelo} `}</b>
          </h2>
          <h2 className='mb-4'>
            Cantidad:
            <b>{` ${product.quantity} unidades`}</b>
          </h2>

          <h2 className='text xl lg:text 2xl'>
            Total:$
            <b className='text xl lg:text 2xl text-red-500'>
              {`${product.precio * product.quantity}`} MXN
            </b>
          </h2>
        </div>
        <button
          className='bg-red-700 text-white lg:font-bold lg:py-2 px-4 border border-black rounded w-full mt-8 '
          onClick={() => deleteFromCart(product)}
        >
          Eliminar del Carrito
        </button>
      </div>
    </div>
  )
}

export default CartItem
