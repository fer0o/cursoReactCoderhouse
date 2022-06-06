import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, marca, id, modelo, categoria }) => {
  return (
    <div className='border-2 p-4 grid grid-cols-2 drop-shadow rounded-lg'>
      <div className='flex justify-center'>
        <img src={img} className='w-56 h-56 p-4' />
      </div>
      <div className='m-4 flex flex-col'>
        <h4> País: {nombre} </h4>
        <h4> Modelo: {modelo} </h4>
        <h4>
          Marca: <b>{marca}</b>
        </h4>
        <h4>
          Categoria: <b>{categoria}</b>
        </h4>
        <h4 className='font-bold mb-8'>
          precio:<b> ${precio}</b> MXN
        </h4>
        <Link
          className='px-4 py-2 mt-auto w-[100px] bg-blue-500 text-white font-bold border '
          to={`/itemDetail/${id}`}
        >
          Ver Mas
        </Link>
      </div>
    </div>
  )
}

export default Item
