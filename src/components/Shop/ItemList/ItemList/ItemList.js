import React from 'react'
import Item from '../../Item/Item'

const ItemList = ({ category }) => {
  console.log(category)
  return (
    <div className='md:grid container mx-auto grid-cols-3 gap-4 p-4 xl:ml-8 '>
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
