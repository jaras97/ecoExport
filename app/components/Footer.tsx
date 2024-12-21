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

          {/* Redes sociales y contacto */}
          <div>
            <h3 className='text-2xl font-bold mb-4'>
              {dict.footer.contact.title}
            </h3>
            <p className='mb-4 text-gray-300'>
              <span className='block'>{dict.footer.contact.phone}</span>
              <span className='block'>{dict.footer.contact.email}</span>
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                aria-label='Facebook'
                className='text-gray-300 hover:text-secondary transition-colors'
              >
                {/* Icono de Facebook */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                >
                  <path d='M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24h11.499v-9.294H9.672v-3.622h3.152V8.414c0-3.11 1.895-4.796 4.662-4.796 1.324 0 2.462.098 2.794.142v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.591l-.467 3.622h-3.124V24h6.127c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.406 0 22.675 0z' />
                </svg>
              </a>
              <a
                href='#'
                aria-label='Instagram'
                className='text-gray-300 hover:text-secondary transition-colors'
              >
                {/* Icono de Instagram */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 0C8.74 0 8.333.014 7.052.072 5.773.131 4.746.27 3.9.465c-.9.206-1.667.48-2.392 1.205-.724.725-1 .992-1.206 2.392-.195.846-.334 1.873-.393 3.151C0 8.333.014 8.74.072 12c.058 3.26.072 3.667.072 4.948.059 1.279.198 2.305.393 3.151.206.9.48 1.667 1.206 2.392.725.724.992 1 2.392 1.206.846.195 1.873.334 3.151.393C8.333 24 8.74 23.986 12 23.928c3.26-.058 3.667-.072 4.948-.072 1.279-.059 2.305-.198 3.151-.393.9-.206 1.667-.48 2.392-1.206.724-.725.992-1 1.206-2.392.195-.846.334-1.873.393-3.151C24 15.667 23.986 15.26 23.928 12c-.058-3.26-.072-3.667-.072-4.948-.059-1.279-.198-2.305-.393-3.151-.206-.9-.48-1.667-1.206-2.392-.725-.724-.992-1-2.392-1.206-.846-.195-1.873-.334-3.151-.393C15.667 0 15.26.014 12 .072zm0 5.838c1.135 0 1.244.006 1.677.024.425.019.714.075.963.163.231.08.429.187.616.374.187.188.293.386.374.616.088.249.145.538.163.963.018.433.024.542.024 1.677 0 1.135-.006 1.244-.024 1.677-.019.425-.075.714-.163.963-.08.231-.187.429-.374.616-.188.187-.386.293-.616.374-.249.088-.538.145-.963.163-.433.018-.542.024-1.677.024-1.135 0-1.244-.006-1.677-.024-.425-.019-.714-.075-.963-.163-.231-.08-.429-.187-.616-.374-.187-.188-.293-.386-.374-.616-.088-.249-.145-.538-.163-.963-.018-.433-.024-.542-.024-1.677 0-1.135.006-1.244.024-1.677.019-.425.075-.714.163-.963.08-.231.187-.429.374-.616.188-.187.386-.293.616-.374.249-.088.538-.145.963-.163.433-.018.542-.024 1.677-.024zm0 1.967c-2.227 0-4.036 1.809-4.036 4.036 0 2.227 1.809 4.036 4.036 4.036 2.227 0 4.036-1.809 4.036-4.036 0-2.227-1.809-4.036-4.036-4.036zm6.896-2.648c-.534 0-.967.433-.967.967s.433.967.967.967c.534 0 .967-.433.967-.967s-.433-.967-.967-.967z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
