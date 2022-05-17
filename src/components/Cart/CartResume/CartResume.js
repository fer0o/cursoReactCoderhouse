import React from 'react'

export const CartResume = ({ prod }) => {
  return (
    <div>
      <h4>{prod.precio * prod.quantity}</h4>
    </div>
  )
}
