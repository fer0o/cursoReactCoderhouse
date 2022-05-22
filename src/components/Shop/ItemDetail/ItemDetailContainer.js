import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// import { getItem } from '../../../data/equiposData'
import ItemDetail from './ItemDetail/ItemDetail'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
  // const [product, setProduct] = useState({})
  const { itemId } = useParams()
  const [product, setProduct] = useState({})

  // useEffect(() => {
  //   if (id === undefined) {
  //     getItem().then(response => setProduct(response))
  //   } else {
  //     getItem().then(response => setProduct(response[id]))
  //   }
  // }, [id])
  // console.log(product)
  useEffect(() => {
    getItem()
  }, [itemId])

  const getItem = () => {
    const getItemPromise = new Promise((res, rej) => {
      const db = getFirestore()

      const itemCollection = collection(db, 'items')
      getDocs(itemCollection).then(snapshot => {
        const items = snapshot.docs.map(doc => ({ ...doc.data() }))
        console.log({ items })
        res(items)
      })
    })

    getItemPromise.then(data => {
      setProduct(data.find(d => d.id == itemId))
    })
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer
