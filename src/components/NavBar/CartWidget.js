import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
const CartWidget = () => {
  const [cartClick, setCartClick] = useState(false)

  const { cart } = useCartContext()
  let itemsCartWidg = 0
  // for (let i = 0; i < cart.length; i++) {
  //   const cant = cart[i].quantity

  //   itemsCartWidg = itemsCartWidg + cant
  // }
  cart.forEach(element => {
    const cant = element.quantity
    itemsCartWidg = itemsCartWidg + cant
  })
  return (
    <div>
      <label className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' />
          </svg>
          <span className='badge badge-sm indicator-item'>{itemsCartWidg}</span>
        </div>
        {
          <div>
            <Link to={`/cart`}>Ver Carrito</Link>
          </div>
        }
      </label>
    </div>
  )
}

export default CartWidget
