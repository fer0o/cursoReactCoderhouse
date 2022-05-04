import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, marca, id }) => {
  return (
    <div>
      <div className=' container grid grid-cols-2 gap-2 mx-auto border-2 m-4  '>
        <div className='flex justify-center'>
          <img src={img} className='w-52 h-52 p-4 ' />
        </div>
        <div className=' m-4'>
          <h4>Jersey país: {nombre} 2022</h4>
          <h4>
            Marca: <b>{marca}</b>
          </h4>
          <h4 className='font-bold mb-8'>
            precio:<b> ${precio}</b> MXN
          </h4>
          <Link
            className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[100px] mt-40'
            to={`/item/${id}`}
          >
            Ver Mas
          </Link>
        </div>

        {/* <div>
          <img src={img} className='w-52 h-52 p-4' />
        </div>

        <div className='md:pt-4 pb-4'>
          <h4>Jersey país: {nombre} 2022</h4>
          <h4>
            Marca: <b>{marca}</b>
          </h4>
          <h4 className='font-bold'>
            precio:<b> ${precio}</b> MXN
          </h4>
          <div className='bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded w-[100px] mt-4'>
            <Link to={`/item/${id}`}>Ver Mas</Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Item
