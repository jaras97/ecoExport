'use client';

import React from 'react';
import Image from 'next/image';
import { Dictionary } from '../[lang]/dictionaries';
import { motion } from 'framer-motion';

export default function ProductsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id='productos' className='py-16 bg-primary'>
      <div className='container mx-auto px-4 text-center'>
        {/* Título */}
        <h2 className='text-5xl text-white font-bold mb-8' data-aos='fade-up'>
          {dict.products.title}
        </h2>

        {/* Grid Responsivo */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {dict.products.items.map((product, index) => (
            <div
              key={index}
              data-aos='flip-up'
              data-aos-delay={index * 200} // Retrasa cada tarjeta
              className='group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 flex flex-col justify-between'
            >
              {/* Imagen optimizada */}
              <div className='relative w-full h-48'>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  priority={index === 0} // Prioriza la carga de la primera imagen
                  className='transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              {/* Contenido */}
              <div className='flex flex-col justify-between flex-grow p-6 bg-gray-100 text-center group-hover:bg-gray-200 transition-colors duration-300'>
                <div>
                  <h3 className='text-4xl font-bold text-gray-900 mb-2'>
                    {product.title}
                  </h3>
                  <p className='text-gray-700 text-lg'>{product.description}</p>
                </div>
                {/* Botón de descarga */}

                {product.pdf && (
                  <motion.a
                    href={product.pdf}
                    download
                    className='inline-block mt-4 px-6 py-3 bg-secondary text-white font-bold text-lg rounded-lg shadow-lg hover:bg-secondary-dark transition-colors'
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {product?.downloadMessage}
                  </motion.a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
