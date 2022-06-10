import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getItem } from '../../../data/equiposData'
import ItemList from './ItemList/ItemList'
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query
} from 'firebase/firestore'

const ItemListContainer = props => {
  //const [category, setCategory] = useState()
  const { greetings } = props
  const { categoryId } = useParams()
  const [products, setProducts] = useState([])

  // useEffect(() => {
  //   if (categoryId === undefined) {
  //     getItem().then(response => setCategory(response))
  //   } else {
  //     getItem().then(response =>
  //       setCategory(response.filter(product => product.category === categoryId))
  //     )
  //   }
  // }, [categoryId])
  useEffect(() => {
    const db = getFirestore()

    const itemCollection = collection(db, 'items')
    console.log({ categoryId })
    if (categoryId) {
      const q = query(
        collection(db, 'items'),
        where('category', '==', categoryId)
      )
      getDocs(q).then(snapshot => {
        console.log(snapshot)
        setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
    } else {
      getDocs(itemCollection).then(snapshot => {
        console.log({ snapshot })
        setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      })
    }
  }, [categoryId])

  return (
    <div>
      <div>
        <div className='block text-center  lg:text-4xl text-2xl font-bold'>
          {greetings}
        </div>
        <ItemList products={products} />
      </div>
    </div>
  )
}

export default ItemListContainer
