import { Dictionary } from '../[lang]/dictionaries';

export default function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <div
      id='inicio'
      className='relative bg-cover bg-gray-50 bg-center h-screen text-white'
      style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
      data-aos='fade-in'
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-4'>
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
