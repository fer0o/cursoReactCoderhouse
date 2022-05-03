import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, precio, img, marca, id }) => {
  return (
    <div>
      <div>
        <h4>precio: {precio} MXN</h4>
        <h4>Jersey país: {nombre} 2022</h4>
        <h4>Marca: {marca}</h4>
        <div>
          <img src={img} className='w-[200px] h-[200px]' />
        </div>
      </div>

      <div>
        <Link to={`/item/${id}`}>Ver Mas</Link>
      </div>
    </div>
  )
}

export default Item
