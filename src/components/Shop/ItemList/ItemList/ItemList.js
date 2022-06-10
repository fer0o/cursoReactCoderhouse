import React from 'react'
import Hero from '../../../otros/Hero'
import Item from '../../Item/Item'

const ItemList = ({ products }) => {
  console.log(products)
  return (
    <div>
      <h1 className='flex justify-center text-4xl font-bold m-8'>
        Bienvenidos Tienda de jerseys del Mundial Qatar 2022
      </h1>

      <div className='md:grid grid-cols-2 container mx-auto lg:grid-cols-3 gap-4 p-4'>
        {products &&
          products.map(product => (
            <Item
              id={product.id}
              nombre={product.nombre}
              precio={product.precio}
              marca={product.marca}
              img={product.jersey}
              modelo={product.modelo}
              category={product.category}
              key={product.id}
            />
          ))}
      </div>
    </div>
  )
}

export default ItemList
