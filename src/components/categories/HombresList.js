import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore'

const HombresList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'), where('category', '==', 'hombre'))
    getDocs(q).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
  }, [])
  return (
    <div>
      <ul>
        <li key='hombre'>
          <Link to={`/itemListContainer/${'hombre'}`}>Hombres</Link>
        </li>
      </ul>
    </div>
  )
}

export default HombresList
