import React from 'react'

const Hero = () => {
  const urlImage =
    'https://firebasestorage.googleapis.com/v0/b/mundialito-f43cc.appspot.com/o/1920x800-Qatar22-Branded-Asset-Hero.jpg?alt=media&token=7afdb6a6-dbf8-4f7f-8c58-ef1e91c1d7ab'
  return (
    <div>
      <div>
        <img
          className='opacity-[0.75] lg:h-[70vh] h-full w-full lg:object-cover  '
          src={urlImage}
        />
        <div className='container absolute top-28 lg:top-96 lg:right-60 text-white m-2 lg:m-16'>
          <h1 className='lg:text-7xl text-xl font-extrabold'>
            Copa Mundial de la FIFA Catar 2022
          </h1>
          <div className='mt-8'>
            <h2 className='ml-1 lg:text-2xl font-bold'>
              Lunes, 21 de noviembre de 2022
            </h2>
            <h2 className='ml-1 lg:text-2xl font-bold'>13:00 hrs Hora Local</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
