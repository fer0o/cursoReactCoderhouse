// sin destructurar
// const Saludo = props => {
//   return (
//     <h1 className='text-red-900 text-3xl'>
//       Hola {props.name} {props.apellido}
//     </h1>
//   )
// }
// export default Saludo
// aqui se desetructura
const Saludo = ({ name, apellido, edad }) => {
  return (
    <h1 className='text-red-900 text-3xl'>
      Hola {name} {apellido} tienes {edad} años
    </h1>
  )
}
export default Saludo
