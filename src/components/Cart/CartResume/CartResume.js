import React from 'react'

export const CartResume = ({ prod }) => {
  return (
    <div>
      <h4>
        $<b>{prod.precio * prod.quantity}</b> MXN
      </h4>
    </div>
  )
}
