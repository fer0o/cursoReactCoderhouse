import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import { useCartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

const ItemCount = ({ stock, onAdd, id }) => {
  const [count, setCount] = useState(0)

  const { addToCart } = useCartContext()
  const { products } = useAppContext()

  const addProduct = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }
  const resProduct = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  const handdleClick = (id, cantidad) => {
    const findProduct = products.find(producto => producto.id === id)
    if (!findProduct) {
      new Swal({
        title: 'Hubo un error en tus datos',
        text: 'El producto no pudo ser añadido,Intente nuevamente',
        icon: 'error',
        button: 'Ok'
      })
      return
    }
    addToCart(findProduct, cantidad)
    onAdd(count)
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
          className='flex justify-start text-2xl font-bold m-2'
          onClick={resProduct}
        >
          -
        </button>
        <label className='flex justify-center text-2xl font-bold m-2'>
          {count}
        </label>
        <button
          className='flex justify-end text-2xl font-bold m-2 '
          onClick={addProduct}
        >
          +
        </button>
      </div>

      <div>
        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[300px]'
          onClick={() => handdleClick(id, count)}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount
