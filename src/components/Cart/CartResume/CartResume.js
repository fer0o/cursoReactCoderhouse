import React from 'react'

const CartResume = ({ prod }) => {
  return (
    <div>
      <h4>{prod.precio * prod.quantity}</h4>
    </div>
  )
}

export default CartResume
