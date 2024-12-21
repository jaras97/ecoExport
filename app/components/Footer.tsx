import { Dictionary } from '../[lang]/dictionaries';

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className='bg-primary text-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Contenedor principal dividido en 3 columnas */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3'>
          {/* Información de la empresa */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              {dict.footer.company.title}
            </h3>
            <p className='text-gray-300'>{dict.footer.company.description}</p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              {dict.footer.quickLinks.title}
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#inicio'
                  className='hover:text-secondary transition-colors'
                >
                  {dict.footer.quickLinks.links.home}
                </a>
              </li>
              <li>
                <a
                  href='#sobre-nosotros'
                  className='hover:text-secondary transition-colors'
                >
                  {dict.footer.quickLinks.links.about}
                </a>
              </li>
              <li>
                <a
                  href='#productos'
                  className='hover:text-secondary transition-colors'
                >
                  {dict.footer.quickLinks.links.products}
                </a>
              </li>
              <li>
                <a
                  href='#contacto'
                  className='hover:text-secondary transition-colors'
                >
                  {dict.footer.quickLinks.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Correos electrónicos */}
          {/* Contacto */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              {dict.footer.contact.title}
            </h3>
            <ul className='space-y-2'>
              <li>
                <span className='block text-gray-300'>
                  <strong>Teléfono:</strong> +506 8434 9793
                </span>
              </li>
              <li>
                <a
                  href='mailto:gerencia@ecoexportcr.com'
                  className='text-gray-300 hover:text-secondary transition-colors'
                >
                  gerencia@ecoexportcr.com
                </a>
              </li>
              <li>
                <a
                  href='mailto:comercial@ecoexportcr.com'
                  className='text-gray-300 hover:text-secondary transition-colors'
                >
                  comercial@ecoexportcr.com
                </a>
              </li>
              <li>
                <a
                  href='mailto:admon@ecoexportcr.com'
                  className='text-gray-300 hover:text-secondary transition-colors'
                >
                  admon@ecoexportcr.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className='mt-8 text-center text-sm text-gray-300'>
          {dict.footer.rights}
        </div>
      </div>
    </footer>
  );
}
