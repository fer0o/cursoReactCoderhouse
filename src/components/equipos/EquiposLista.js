import { useEffect, useState } from 'react'
import { equiposData } from '../../data/equiposData'
import EquiposCard from './EquiposCard'

const EquiposLista = () => {
  const [equipos, setEquipos] = useState([])

  useEffect(() => {
    //   para dejar mas limpio el use effect se crea la funcion getEquipos
    getEquipos()
  }, [])
  //   funcion que maneje la complejidad de la promise
  const getEquipos = () => {
    const getEquiposPromise = new Promise((result, reject) => {
      setTimeout(() => {
        result(equiposData)
      }, 2000)
    })
    getEquiposPromise.then(data => {
      setEquipos(data)
    })
  }

  return (
    <div>
      {equipos.map(e => (
        <EquiposCard key={e.id} equipo={e} />
      ))}
    </div>
  )
}
export default EquiposLista
