'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Dictionary } from '../[lang]/dictionaries';

export default function DownloadPDF({ dict }: { dict: Dictionary }) {
  return (
    <div className='mt-12 text-center'>
      <motion.a
        href={dict.products?.pdf}
        download
        className='inline-block px-8 py-4 bg-secondary text-white font-bold text-2xl rounded-lg shadow-lg hover:bg-secondary-dark transition-colors relative overflow-hidden'
        whileHover={{
          scale: 1.1,
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {dict.products.downloadMessage || 'Download Product Details PDF'}
        {/* Animación del fondo */}
        <span className='absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 rounded-lg pointer-events-none' />
      </motion.a>

      <motion.p
        className='text-gray-300 mt-4 text-lg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {dict.products.pdfNote ||
          'Get detailed information about our products.'}
      </motion.p>
    </div>
  );
}
