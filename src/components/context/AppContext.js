import React, { createContext, useContext, useEffect, useState } from 'react'
// import { getItem } from '../../data/equiposData'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = collection(db, 'items')
    getDocs(itemCollection).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    console.log({ products })
  }, [])
  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  )
}

export default AppContextProvider
