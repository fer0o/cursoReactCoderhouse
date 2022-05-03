import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{product.nombre}</h1>
          <h4>{product.marca}</h4>
          <h4>{product.precio}</h4>
        </div>
        <img src={product.jersey} />
        <div>
          <ItemCount product={product} initial={1} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
