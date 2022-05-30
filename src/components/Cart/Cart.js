import CartItem from './CartItem/CartItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { CartResume } from './CartResume/CartResume'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {
  const { cart, deleteCart } = useCartContext()

  // for (let i = 0; i < cart.length; i++) {
  //   const precio = cart[i].precio * cart[i].quantity
  //   total += precio
  // }
  let total = 0
  cart.forEach(productoEnCarrito => {
    total += productoEnCarrito.precio * productoEnCarrito.quantity
  })

  return (
    <div>
      <div className='flex justify-center p-8'>
        <h1 className='text-2xl font-bold'> Bienvenido al Carrito!</h1>
      </div>
      {/* container */}
      <div className=' grid grid-cols-6 gap-1 p-4'>
        <div className='col-span-4'>
          {cart.length !== 0 && (
            <div>
              {cart.map(product => (
                <CartItem key={product.id} product={product} />
              ))}
              <div className='flex justify-center m-4'>
                <button
                  className='bg-red-700 text-white font-bold py-2 px-4 border border-black rounded w-[300px] '
                  onClick={deleteCart}
                >
                  Limpiar carrito
                </button>
              </div>
            </div>
          )}
          {cart.length === 0 && (
            <div>
              <h2> Pareece que no hay productos en el carritos</h2>
              <Link to='/'>Regresar a la pagina principal</Link>
            </div>
          )}
        </div>
        {/* segundo div */}
        <div className='col-span-2 container  gap-2 mx-auto m-4 p-4'>
          <div className='border-2 border-black drop-shadow rounded-lg container'>
            {cart.length !== 0 && (
              <>
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold flex justify-center mb-8'>
                    Resumen Carrito
                  </h2>
                  {cart.map(prod => (
                    <div className='flex justify-end border-b-2 border-black drop-shadow  text-4xl p-4'>
                      <CartResume key={prod.id} prod={prod} />
                    </div>
                  ))}
                  <div className='flex justify-center'>
                    <h3 className='text-4xl m-4'>
                      Total a pagar:
                      <b> ${total}</b>
                    </h3>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
