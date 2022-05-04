import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, marca, id }) => {
  return (
    <div className='md:flex flex-grow-2 space-x-96 space-y-4 border-2 justify-center border-black m-4'>
      <img src={img} className='w-52 h-52 p-4' />

      <div className='md:pt-4 pb-4'>
        <h4>Jersey país: {nombre} 2022</h4>
        <h4>
          Marca: <b>{marca}</b>
        </h4>
        <h4 className='font-bold'>
          precio:<b> ${precio}</b> MXN
        </h4>
        <div className='md:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[100px] mt-4'>
          <Link to={`/item/${id}`}>Ver Mas</Link>
        </div>
      </div>
    </div>
  )
}

export default Item
