import React, { useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ItemDetail = ({ product }) => {
  const { jersey, nombre, marca, precio, stock, id, category, modelo } = product
  // estado interno que cambie el estado
  const [terminar, setTerminar] = useState(false)
  // agregar el contador
  const onAdd = count => {
    setTerminar(true)
    console.log(count)
    alert(`se han agregado ${count} productos a tu carrito`)
  }
  return (
    <div>
      <div className='m-4 flex justify-center'>
        <h2 className='text-4xl font-bold'>Detalle del Producto</h2>
      </div>
      <div className='container lg:grid grid-cols-2 gap-2 mx-auto border-2 m-4'>
        <div className='border-2'>
          <img className='w-full h-auto p-8' src={jersey} />
        </div>
        <div className='flex flex-col justify-center p-16 border-2'>
          <h2 className='text-xl p-2'>
            Jersey equipo: <b>{nombre}</b>
          </h2>
          <h4 className='text-xl p-2'>
            Modelo: <b>{modelo}</b>
          </h4>
          <h4 className='text-xl p-2'>
            Marca del Jersey: <b>{marca}</b>
          </h4>
          <h4 className=' text-xl font-bold mb-8 p-2'>
            precio:<b> ${precio}</b> MXN
          </h4>
          {terminar ? (
            <>
              <Link
                to='/cart'
                className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[300px]'
              >
                Terminar Compra
              </Link>
              <button onClick={() => setTerminar(false)}> Agregar más</button>
            </>
          ) : (
            // <button className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[300px]'>
            //   Terminar Compra
            // </button>
            <div className='flex justify-center'>
              <ItemCount stock={stock} onAdd={onAdd} id={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
