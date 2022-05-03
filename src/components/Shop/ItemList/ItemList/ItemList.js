import React from 'react'
import Item from '../../Item/Item'

const ItemList = ({ category }) => {
  console.log(category)
  return (
    <div>
      {category &&
        category.map(product => (
          <Item
            id={product.id}
            nombre={product.nombre}
            precio={product.precio}
            marca={product.marca}
            img={product.jersey}
            key={product.id}
          />
        ))}
    </div>
  )
}

export default ItemList
