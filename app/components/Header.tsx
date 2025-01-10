'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dictionary } from '../[lang]/dictionaries';
import Image from 'next/image';

export default function Header({ dict }: { dict: Dictionary }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const changeLanguage = (lang: 'en' | 'es') => {
    router.push(`/${lang}`);
  };

  return (
    <header className='bg-primary text-white shadow-md transition-all duration-300 ease-in-out py-3'>
      <div className='container flex justify-between items-center py-4 px-4 lg:px-0'>
        {/* Logo */}
        <Link
          href='/'
          className='font-bold text-lg flex items-center justify-center gap-5'
        >
          <Image
            src='/logo.svg' // Ruta al archivo SVG en la carpeta public
            alt='Eco Export Logo'
            width={100} // Ajusta el ancho del ícono según sea necesario
            height={100} // Ajusta la altura del ícono según sea necesario
            priority // Optimiza la carga del ícono
          />
          <h1 className='hidden md:block'>Eco Export</h1>
        </Link>

        {/* Navegación para pantallas medianas y grandes */}
        <nav className='hidden md:flex space-x-6'>
          <Link
            href='#nosotros'
            className='hover:text-accent transition-colors duration-300 text-xl'
          >
            {dict.header.about_us}
          </Link>
          <Link
            href='#productos'
            className='hover:text-accent transition-colors duration-300 text-xl'
          >
            {dict.header.products}
          </Link>
          <Link
            href='#contacto'
            className='hover:text-accent transition-colors duration-300 text-xl'
          >
            {dict.header.contact}
          </Link>
        </nav>

        {/* Botón CTA */}
        <Link
          href='#contacto'
          className='hidden md:block bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300 text-lg'
        >
          {dict.header.cta}
        </Link>

        {/* Selector de Idioma */}
        <div className='flex items-center space-x-4 md:space-x-6'>
          <button
            onClick={() => changeLanguage('en')}
            className='text-white hover:underline text-lg'
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className='text-white hover:underline text-lg'
          >
            ES
          </button>
        </div>

        {/* Menú Hamburguesa */}
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle Menu'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={`h-6 w-6 transform transition-transform duration-300 ${
              isMenuOpen ? 'rotate-90' : ''
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={
                isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable con transición */}
      <div
        className={`md:hidden bg-primary text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            <li>
              <Link
                href='#nosotros'
                className='hover:text-accent transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.header.about_us}
              </Link>
            </li>
            <li>
              <Link
                href='#productos'
                className='hover:text-accent transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.header.products}
              </Link>
            </li>
            <li>
              <Link
                href='#contacto'
                className='hover:text-accent transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.header.contact}
              </Link>
            </li>
            <li>
              <Link
                href='#contacto'
                className='bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300'
                onClick={() => setIsMenuOpen(false)}
              >
                {dict.header.cta}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
