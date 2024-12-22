'use client';
import { useEffect } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true, // Ejecuta la animación solo una vez
    });
  }, []);
  return (
    <>
      {' '}
      <GoogleAnalytics trackPageViews gaMeasurementId='G-KWQG9VRDRB' />
      {children}
    </>
  );
}
