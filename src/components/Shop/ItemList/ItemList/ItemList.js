import React from 'react'
import Item from '../../Item/Item'

const ItemList = ({ category }) => {
  console.log(category)
  return (
    <div>
      <h1 className='flex justify-center text-4xl font-bold m-8'>
        Bienvenidos Tienda de jerseys del Mundial Qatar 2022
      </h1>
      <div className='md:grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-4 p-4'>
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
    </div>
  )
}

export default ItemList
