import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import HombresList from '../categories/HombresList'
import MujeresList from '../categories/MujeresList'
import Cart from '../Cart/Cart'

const Navbar = () => {
  const { cart } = useCartContext()
  return (
    <div className='navbar flex justify-between z-10 border-b-2 border-black bg-emerald-700 text-2xl font-bold p-4'>
      <div className='flex-1'>
        <Link
          className='btn btn-ghost normal-case hover:bg-transparent text-2xl font-bold'
          to='/'
        >
          Mundialito Shop
        </Link>
      </div>
      <ul
        tabIndex='0'
        className='p-1 sm:flex space-x-8 hidden sm:order-2 bg-transparent mr-8'
      >
        <li>
          <HombresList />
        </li>
        <li>
          <MujeresList />
        </li>
        <li className='ml-8'>{cart.length === 0 ? <></> : <CartWidget />}</li>
      </ul>
      {/* vista mobile */}
      <div className='dropdown dropdown-start order-1'>
        {/* botón menú */}
        <label
          tabIndex='0'
          className='btn btn-square btn-ghost sm:hidden flex-1 '
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block w-5 h-5'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </label>
        {/* items mobile */}
        <ul
          tabIndex='0'
          className='dropdown-content sm:hidden menu right-0 bg-emerald-600  w-42 font-bold text-xl'
        >
          <li>
            <HombresList />
          </li>
          <li>
            <MujeresList />
          </li>
          <li className='ml-8'>{cart.length === 0 ? <></> : <CartWidget />}</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
