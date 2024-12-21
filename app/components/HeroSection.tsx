import Image from 'next/image';
import { Dictionary } from '../[lang]/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <div
      id='inicio'
      className='relative h-screen text-white flex items-center justify-center'
      data-aos='fade-in'
    >
      {/* Imagen optimizada */}
      <div className='absolute inset-0'>
        <Image
          src='/main2.png'
          alt='Hero Background'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          priority
        />
        {/* Overlay oscuro */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      </div>

      {/* Contenido */}
      <div className='relative z-10 text-center px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4' data-aos='zoom-in'>
          {dict.hero.title}
        </h1>
        <p className='text-lg md:text-2xl mb-8' data-aos-delay='200'>
          {dict.hero.subtitle}
        </p>
        <a
          href='#contacto'
          data-aos-delay='400'
          className='px-6 py-3 bg-primary text-white rounded-lg text-lg font-medium hover:bg-secondary transition-colors'
        >
          {dict.hero.cta}
        </a>
      </div>
    </div>
  );
}
