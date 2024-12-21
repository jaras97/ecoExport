import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

// Idiomas completos soportados
const locales = ['en', 'es'];
const defaultLocale = 'es';

// Función para obtener el idioma preferido del usuario
function getLocale(request: NextRequest): string {
  const negotiatorHeaders = { 'accept-language': request.headers.get('accept-language') || '' };
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return match(languages, locales, defaultLocale); // Devuelve el mejor idioma compatible
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar si ya hay un idioma en la ruta
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );



  if (pathnameHasLocale) return NextResponse.next();

  // Redirigir al idioma detectado si no está presente en la URL
  const locale = getLocale(request);
  const newPathname = `/${locale}${pathname}`;
  return NextResponse.redirect(new URL(newPathname, request.url));
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)'], // Excluir rutas internas y archivos estáticos
};
