// app/layout.tsx
import './globals.css';


export const metadata = {
  title: 'EcoExport',
  description: 'Landing page profesional para EcoExport',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
  },
};

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}

export default  function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'es' }

}) {
  

  return (
    <html lang={params.lang} >
      <body>{children}</body>
    </html>
  );
}
