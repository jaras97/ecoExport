import 'server-only'
 
export type Dictionary = {
  header: {
    about_us: string;
    products: string;
    contact: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    quality: string;
    sustainability: string;
    trust: string;
    qualityDescription: string;
    sustainabilityDescription: string;
    trustDescription: string;
  };
  products: {
    title: string;
    items: {
      title: string;
      description: string;
      image: string;
    }[];
  };
  contact: {
    title: string;
    description: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      nameError: string;
      emailError: {
        required: string;
        invalid: string;
      };
      messageError: string;
      submit: string;
    };
    success: string;
    error: string;
  };
  footer: {
    company: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
      links: {
        home: string;
        about: string;
        products: string;
        contact: string;
      };
    };
    contact: {
      title: string;
      phone: string;
      email: string;
    };
    rights: string;
   
  };
  whatsapp: {
    phone: string,
    message: string,
    label: string
  }
};


const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'es') => {
  const safeLocale = ['en', 'es'].includes(locale) ? locale : 'en';
  return dictionaries[safeLocale]();
};