import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItem } from '../../../data/equiposData'
import ItemList from './ItemList/ItemList'

const ItemListContainer = () => {
  const { categoryId } = useParams()
  const [category, setCategory] = useState()
  useEffect(() => {
    if (categoryId === undefined) {
      getItem().then(response => setCategory(response))
    } else {
      getItem().then(response =>
        setCategory(response.filter(product => product.category === categoryId))
      )
    }
  }, [categoryId])

  return (
    <div>
      <div>
        <ItemList category={category} />
      </div>
    </div>
  )
}

export default ItemListContainer
