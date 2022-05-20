import { collection, getDocs, getFirestore } from 'firebase/firestore'

const task = new Promise(resp => {
  const db = getFirestore()

  const itemCollection = collection(db, 'items')
  getDocs(itemCollection).then(snapshot => {
    const items = snapshot.docs.map(doc => ({ ...doc.data() }))
    resp(items)
  })
})

export const getItem = () => {
  return task
}
