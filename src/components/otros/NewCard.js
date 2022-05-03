import React from 'react'

const NewCard = (props) => {
  return (
    <>
        
        <div>Componente New Card</div>
        {props.otroComponente({name: 'Fer', apellido:'Medellin', edad: 29 })}
            
        
    </>
  )
}

export default NewCard