const EquiposCard = ({ equipo }) => {
  const { id, nombre, continente, jersey } = equipo
  return (
    <div className='grid-cols-2'>
      <img className='w-[20vh] h-full' src={jersey} />

      <div className='text-2xl font-bold'>{nombre}</div>
      <div>{continente}</div>
    </div>
  )
}

export default EquiposCard
