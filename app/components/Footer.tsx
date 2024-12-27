import { Dictionary } from '../[lang]/dictionaries';
// import Image from 'next/image';

export default function Footer({ dict }: { dict: Dictionary }) {
  return (
    <footer className='bg-primary text-white py-16'>
      <div className='container mx-auto px-4'>
        {/* Contenedor principal dividido en 4 columnas */}
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {/* Información de la empresa */}
          <div>
            <h3 className='text-3xl font-bold mb-4'>
              {dict.footer.company.title}
            </h3>
            <p className='text-gray-300 text-lg'>
              {dict.footer.company.description}
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className='text-3xl font-bold mb-4'>
              {dict.footer.quickLinks.title}
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#inicio'
                  className='hover:text-secondary transition-colors text-lg'
                >
                  {dict.footer.quickLinks.links.home}
                </a>
              </li>
              <li>
                <a
                  href='#nosotros'
                  className='hover:text-secondary transition-colors text-lg'
                >
                  {dict.footer.quickLinks.links.about}
                </a>
              </li>
              <li>
                <a
                  href='#productos'
                  className='hover:text-secondary transition-colors text-lg'
                >
                  {dict.footer.quickLinks.links.products}
                </a>
              </li>
              <li>
                <a
                  href='#contacto'
                  className='hover:text-secondary transition-colors text-lg'
                >
                  {dict.footer.quickLinks.links.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Correos electrónicos */}
          <div>
            <h3 className='text-3xl font-bold mb-4'>
              {dict.footer.contact.title}
            </h3>
            <ul className='space-y-2 text-lg'>
              <li>
                <span className='block text-gray-300 text-lg'>
                  <strong>{dict.footer.contact.phone}</strong> +506 8672 2741
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

          {/* Empresas Aliadas */}
          <div>
            <h3 className='text-3xl font-bold mb-4'>
              {dict.footer.alliedCompanies.title}
            </h3>
            {dict.footer.alliedCompanies.companies.map((company, index) => (
              <div key={index} className='flex items-start space-x-4 mb-6'>
                {/* Logo */}
                {/* <div className='w-16 h-16 relative flex-shrink-0'>
                  <Image
                    src={company.logo}
                    alt={company.name}
                    layout='fill'
                    objectFit='contain'
                    priority
                    className='rounded-lg'
                  />
                </div> */}
                {/* Información de la empresa */}
                <div>
                  <h4 className='text-2xl font-semibold'>{company.name}</h4>
                  <p className='text-gray-300 text-base'>
                    {company.description}
                  </p>
                  {/* <a
                    href={company.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-secondary hover:text-secondary-dark font-bold text-sm'
                  >
                    Visit Website
                  </a> */}

                  {/* Correo electrónico */}
                  {company.email && (
                    <a
                      href={`mailto:${company.email}`}
                      className='text-gray-300 hover:text-secondary transition-colors text-sm'
                    >
                      {company.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
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
