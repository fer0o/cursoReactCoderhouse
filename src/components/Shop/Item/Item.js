import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, marca, id }) => {
  return (
    <div>
      <div>
        <h4>{precio}</h4>
        <h4>{nombre}</h4>
        <h4>{marca}</h4>
      </div>
      <div>
        <img src={img} className='w-[200px] h-[200px]' />
      </div>
      <div>
        <Link to={`/item/${id}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default Item
