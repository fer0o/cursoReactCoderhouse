import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
const CartWidget = () => {
  const [cartClick, setCartClick] = useState(false)
  const { cart } = useCartContext()
  let itemsCartW = 0
  for (let i = 0; i < cart.lenght; i++) {
    const cant = cart[i].quantity
    itemsCartW = itemsCartW + cant
  }
  return (
    <div>
      <div className='cartWidget' onClick={e => setCartClick(!cartClick)}>
        <span className='cartCant'>{itemsCartWidg}</span>
        <i className='fas fa-shopping-cart cart-style'>
          <p></p>
        </i>

        {cartClick ? (
          <div className='card-click'>
            <Link to='/cart' className='btn bg-principal text-white'>
              Ver Carrito
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default CartWidget
