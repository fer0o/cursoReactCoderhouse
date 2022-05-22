import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from 'firebase/firestore'

const MujeresList = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const db = getFirestore()
    const q = query(collection(db, 'items'), where('category', '==', 'mujer'))
    getDocs(q).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({ ...doc.data() })))
    })
  }, [])
  return (
    <div>
      <ul>
        <li key='mujer'>
          <Link to={`/itemListContainer/${'mujer'}`}>Mujeres</Link>
        </li>
      </ul>
    </div>
  )
}

export default MujeresList
