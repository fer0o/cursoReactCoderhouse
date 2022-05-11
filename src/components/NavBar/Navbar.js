import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar bg-emerald-700'>
      {/* comentado por ahora que no es responsive */}
      {/* <div className='flex flex-1'>
        <img
          className='w-14 h-14  '
          src={'http://cdn.onlinewebfonts.com/svg/img_571584.png'}
        />
        <a className='btn btn-ghost normal-case font-bold text-3xl'>
          Mundialito
        </a>
      </div> */}
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a href='/' className='text-xl'>
              Inicio
            </a>
          </li>
          <li>
            <a href='/category/hombre' className='text-xl'>
              Hombre
            </a>
          </li>
          {/* <li>
            <a href='/' className='text-xl'>
              Mujer
            </a>
          </li>
          <li>
            <a href='/' className='text-xl'>
              Niños
            </a>
          </li> */}
        </ul>
        {/* comentado por ahora que no es responsive */}
        <CartWidget />
      </div>
    </div>
  )
}

export default Navbar
