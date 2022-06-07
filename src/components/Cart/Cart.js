import CartItem from './CartItem/CartItem'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import { CartResume } from './CartResume/CartResume'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  Timestamp,
  updateDoc
} from 'firebase/firestore'

const initialBuyer = {
  name: '',
  phone: '',
  email: ''
}

const Cart = () => {
  // para orden
  const [buyer, setBuyer] = useState(initialBuyer)
  const { cart, deleteCart } = useCartContext()
  let total = 0
  cart.forEach(productoEnCarrito => {
    //console.log({ productoEnCarrito })
    total += productoEnCarrito.precio * productoEnCarrito.quantity
  })
  const order = {
    buyer,
    item: cart,
    total
  }
  const db = getFirestore()
  // generar orden
  const generateOrder = async order => {
    const newOrder = addDoc(collection(db, 'orders'), {
      ...order,
      date: Timestamp.fromDate(new Date())
    })
    return newOrder
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (buyer.name !== '' && buyer.phone !== '' && buyer.email !== '') {
      generateOrder(order)
        .then(res => {
          alert('Orden generada con exito, tu orden es la numero: ' + res.id)
        })
        .then(() => deleteCart())
        .catch(err => alert('Error al generar la orden'))
    } else {
      alert('Faltan datos')
    }
  }
  const handleChange = e => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <div className='flex justify-center p-8'>
        <h1 className='text-2xl font-bold'> Bienvenido al Carrito!</h1>
      </div>
      {/* container */}
      <div className=' grid grid-cols-6 gap-1 p-4'>
        <div className='col-span-4'>
          {cart.length !== 0 && (
            <div>
              {cart.map(product => (
                <CartItem key={product.id} product={product} />
              ))}
              <div className='flex justify-center m-4'>
                <button
                  className='bg-red-700 text-white font-bold py-2 px-4 border border-black rounded w-96 '
                  onClick={deleteCart}
                >
                  Limpiar carrito
                </button>
              </div>
            </div>
          )}
          {cart.length === 0 && (
            <div>
              <h2> Pareece que no hay productos en el carritos</h2>
              <Link to='/'>Regresar a la pagina principal</Link>
            </div>
          )}
        </div>
        {/* segundo div */}
        <div className='col-span-2 container  gap-2 mx-auto m-4 p-4'>
          <div className='border-2 border-black drop-shadow rounded-lg container'>
            {cart.length !== 0 && (
              <>
                <div className='flex flex-col'>
                  <h2 className='text-lg lg:text-2xl font-bold flex justify-center mb-8'>
                    Resumen Carrito
                  </h2>
                  {cart.map(prod => (
                    <div className='flex justify-end border-b-2 border-black drop-shadow text-xl lg:text-4xl p-4'>
                      <CartResume key={prod.id} prod={prod} />
                    </div>
                  ))}
                  <div className='flex justify-center'>
                    <h3 className='text-xl lg:text-4xl m-4'>
                      Total a pagar:
                      <b> ${total}</b>
                    </h3>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className='border-2 border-black drop-shadow rounded-lg container flex flex-col mt-2 p-2'>
            <p className='flex justify-center border-b-2 border-black  text-sm'>
              Agrega tus datos para completar la orden
            </p>
            <div>
              <form
                onSubmit={handleSubmit}
                onChange={handleChange}
                className='flex flex-col justify-center container mt-2 mb-3'
              >
                <input
                  className='form-control mb-2'
                  type='text'
                  placeholder='Nombre:'
                  name='name'
                  value={order.name}
                />
                <input
                  className='form-control mb-2'
                  type='number'
                  placeholder='Telefono:'
                  name='phone'
                  value={order.phone}
                />
                <input
                  className='form-control mb-2'
                  type='email'
                  placeholder='Email:'
                  name='email'
                  value={order.email}
                />
                <button className='bg-blue-500 text-white lg:font-bold py-2 lg:px-4 border border-black rounded w-full  '>
                  Enviar orden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
