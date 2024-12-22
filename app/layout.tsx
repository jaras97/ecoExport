import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import { Poppins } from 'next/font/google';
import Script from 'next/script';

export const metadata = {
  title: 'EcoExport - Exporting Quality and Trust',
  description:
    'Discover high-quality materials like scrap metal, wood, and dried fruits with EcoExport. Sustainable and reliable services for global needs.',
  keywords:
    'ecoexport, export materials, scrap metal, wood, dried fruits, sustainability, quality',
  openGraph: {
    title: 'EcoExport - Exporting Quality and Trust',
    description:
      'Sustainable and reliable services exporting high-quality materials.',
    url: 'https://ecoexportcostarica.com',
    type: 'website',
    images: [
      {
        url: '/logo.jpeg',
        alt: 'EcoExport logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoExport - Exporting Quality and Trust',
    description:
      'Sustainable and reliable services exporting high-quality materials.',
    images: ['/logo.jpeg'],
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '700'], // Ajusta los pesos según tus necesidades
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.variable}>
      <head />
      {/* Google Analytics */}

      <Analytics />
      <SpeedInsights />

      <body>
        {' '}
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-KWQG9VRDRB'
          strategy='afterInteractive'
        />
        <Script
          id='google-analytics'
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KWQG9VRDRB');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
