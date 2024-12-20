import Header from "../components/Header";


export default async function LangLayout({
    children,

  }: {
    children: React.ReactNode;

  }) {

   
  
    return (
      <html >
        <body><Header/> {children}</body>
      </html>
    );
  }
  