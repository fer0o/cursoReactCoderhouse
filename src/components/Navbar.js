const Navbar = () => {
  return (
    <div className='navbar bg-emerald-700'>
      <div className='flex-1'>
        <img
          className='w-14 h-14  '
          src={'http://cdn.onlinewebfonts.com/svg/img_571584.png'}
        />
        <a className='btn btn-ghost normal-case text-xl font-bold'>
          Mundialito
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <a href='/'>Inicio</a>
          </li>
          <li>
            <a href='/'>Hombre</a>
          </li>
          <li>
            <a href='/'>Mujer</a>
          </li>
          <li>
            <a href='/'>Niños</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
