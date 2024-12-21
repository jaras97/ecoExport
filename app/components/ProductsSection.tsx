import React from 'react';
import { Dictionary } from '../[lang]/dictionaries';

export default function ProductsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id='productos' className='py-16 bg-primary'>
      <div className='container mx-auto px-4 text-center'>
        {/* Título */}
        <h2 className='text-3xl text-white font-bold mb-8' data-aos='fade-up'>
          {dict.products.title}
        </h2>

        {/* Grid Responsivo */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {dict.products.items.map((product, index) => (
            <div
              key={index}
              data-aos='flip-up'
              data-aos-delay={index * 200} // Retrasa cada tarjeta
              className='bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
            >
              {/* Imagen */}
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-48 object-cover'
              />

              {/* Contenido */}
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{product.title}</h3>
                <p className='text-gray-700'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
