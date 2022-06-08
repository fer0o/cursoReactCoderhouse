import { GoMarkGithub } from 'react-icons/go'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
const Footer = () => {
  return (
    <div>
      <footer className='bg-black footer footer-center p-10 '>
        <div className=''>
          <span className='text-white text-2xl '>Redes Sociales</span>
          <div className=' grid grid-flow-col gap-4'>
            <a
              className='text-4xl'
              href='https://github.com/fer0o'
              target='_blank'
              rel='noreferrer'
              title='Github'
            >
              <GoMarkGithub className='text-white' />
            </a>
            <a
              className='text-4xl'
              href='https://www.instagram.com/fer0osennin/?hl=en'
              target='_blank'
              rel='noreferrer'
              title='Github'
            >
              <SiInstagram className='text-white' />
            </a>
            <a
              className='text-4xl'
              href='https://www.linkedin.com/in/fernando-medellin/'
              target='_blank'
              rel='noreferrer'
              title='Github'
            >
              <SiLinkedin className='text-white' />
            </a>
          </div>
        </div>
        <div>
          <p className='font-bold'>
            Tienda Mundialito <br />
            Guadalajara, Jalisco, México
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
