import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import WhatsAppButton from '../components/WhatsAppButton';
import { getDictionary } from './dictionaries';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: 'en' | 'es' }>;
}) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.lang);

  return (
    <div>
      <Header dict={dict} />
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <ProductsSection dict={dict} />
      <ContactSection dict={dict} />
      <Footer dict={dict} />
      <WhatsAppButton />
    </div>
  );
}
