const Card = ({ children }) => {
  return (
    <div className='border-4 border-dotted border-red-900'>
      <div>Empieza una card</div>
      {children}
      <div>Empieza una card</div>
    </div>
  )
}

export default Card
