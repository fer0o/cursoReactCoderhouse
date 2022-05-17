import CartItem from './CartItem/CartItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext/CartContext'
import { CartResume } from './CartResume/CartResume'

const Cart = () => {
  const { cart, deleteCart } = useCartContext()
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const precio = cart[i].precio * cart[i].quantity
    total += precio
  }

  return (
    <div>
      <div>
        <h1> Bienvenido al Carrito!</h1>
      </div>
      <div>
        {cart.length !== 0 && (
          <>
            <h3>Parece que no hay productos en el carrito</h3>
            <Link to='/'>Busquemos algunos</Link>
          </>
        )}
      </div>
      <div>
        {cart.length !== 0 && (
          <>
            <div>
              <h2>Resumen Carrito</h2>
              {cart.map(prod => (
                <CartResume key={prod.id} prod={prod} />
              ))}
              <h3>Total a pagar: ${total}</h3>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
