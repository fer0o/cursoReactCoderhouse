import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../../data/equiposData'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if (id === undefined) {
      getItem().then(response => setProduct(response))
    } else {
      getItem().then(response => setProduct(response[id]))
    }
  }, [id])
  console.log(product)

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
