import './globals.css';

export const metadata = {
  title: 'EcoExport',
  description: 'Landing page profesional para EcoExport',
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
