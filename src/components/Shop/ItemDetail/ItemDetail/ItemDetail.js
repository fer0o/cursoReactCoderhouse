import React, { useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
  const { jersey, nombre, marca, precio, stock } = product
  // estado interno que cambie el estado
  const [terminar, setTerminar] = useState(false)
  // agregar el contador
  const onAdd = count => {
    setTerminar(true)
    console.log(count)
  }
  return (
    <div className='container grid grid-cols-2 gap-2 mx-auto border-2 m-4'>
      <div className='flex justify-center'>
        <div>
          <img className='w-full h-auto p-4' src={jersey} />
        </div>
        <div>
          <h1>Detalle del Producto</h1>
          <h1>Jersey equipo: {nombre}</h1>
          <h4>Modelo: 2022</h4>
          <h4>Marca del Jersey: {marca}</h4>
          <h4 className='font-bold mb-8'>
            precio:<b> ${precio}</b> MXN
          </h4>
          {terminar ? (
            <button>Terminar Compra</button>
          ) : (
            <ItemCount stock={stock} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
