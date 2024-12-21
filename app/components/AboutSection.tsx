import React from 'react';
import { FaLeaf, FaHandshake, FaAward } from 'react-icons/fa';
import { Dictionary } from '../[lang]/dictionaries';

export default function AboutSection({ dict }: { dict: Dictionary }) {
  return (
    <section id='nosotros' className='py-16 bg-white'>
      <div className='container mx-auto px-4 text-center'>
        {/* Título */}
        <h2 className='text-3xl font-bold mb-8' data-aos='fade-up'>
          {dict.about.title}
        </h2>

        {/* Descripción */}
        <p
          className='text-lg text-gray-700 mb-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {dict.about.description}
        </p>

        {/* Íconos y Descripciones */}
        <div className='grid gap-8 md:grid-cols-3'>
          {/* Calidad Garantizada */}
          <div className='flex flex-col items-center' data-aos='zoom-in'>
            <FaAward className='text-primary text-6xl mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{dict.about.quality}</h3>
            <p className='text-gray-600'>{dict.about.qualityDescription}</p>
          </div>

          {/* Sostenibilidad */}
          <div className='flex flex-col items-center' data-aos='zoom-in'>
            <FaLeaf className='text-primary text-6xl mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              {dict.about.sustainability}
            </h3>
            <p className='text-gray-600'>
              {dict.about.sustainabilityDescription}
            </p>
          </div>

          {/* Confianza */}
          <div className='flex flex-col items-center' data-aos='zoom-in'>
            <FaHandshake className='text-primary text-6xl mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{dict.about.trust}</h3>
            <p className='text-gray-600'>{dict.about.trustDescription}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
