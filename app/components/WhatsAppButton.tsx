'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Dictionary } from '../[lang]/dictionaries';

export default function WhatsAppButton({ dict }: { dict: Dictionary }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => setIsHovered(!isHovered);

  return (
    <div
      className='fixed bottom-6 md:bottom-10 right-6 md:right-10 z-50'
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a
        href={`https://wa.me/${dict.whatsapp.phone}?text=${encodeURIComponent(
          dict.whatsapp.message,
        )}`}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center space-x-2 bg-green-500 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl'
        aria-label={dict.whatsapp.label}
      >
        <FaWhatsapp className='text-2xl' />
        {isHovered && (
          <span className='hidden md:block text-white font-medium'>
            {dict.whatsapp.label}
          </span>
        )}
      </a>
    </div>
  );
}
