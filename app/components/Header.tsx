'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

  return (
    <header className="bg-primary text-white">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.jpeg"
            alt="EcoExport Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#inicio" className="hover:text-accent">{'about_us'}</Link>
          <Link href="#productos" className="hover:text-accent">{'products'}</Link>
          <Link href="#contacto" className="hover:text-accent">{'contact'}</Link>
        </nav>

        {/* Botón CTA */}
        <Link
          href="#contacto"
          className="bg-accent text-primary px-4 py-2 rounded-md hover:bg-secondary"
        >
          {'tcta'}
        </Link>
      </div>
    </header>
  );
}
