const EquiposCard = ({ equipo }) => {
  const { id, nombre, continente } = equipo
  return (
    <div>
      <div className='text-2xl font-bold'>{nombre}</div>
      <div>{continente}</div>
    </div>
  )
}

export default EquiposCard
