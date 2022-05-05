import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <div className='container grid grid-cols-2 gap-2 mx-auto border-2 m-4'>
      <div className='flex justify-center'>
        <div>
          <img className='w-full h-auto p-4' src={product.jersey} />
        </div>
        <div>
          <h1>Detalle del Producto</h1>
          <h1>Jersey equipo: {product.nombre}</h1>
          <h4>Modelo: 2022</h4>
          <h4>Marca del Jersey: {product.marca}</h4>
          <h4 className='font-bold mb-8'>
            precio:<b> ${product.precio}</b> MXN
          </h4>
          <ItemCount product={product} initial={1} />
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
