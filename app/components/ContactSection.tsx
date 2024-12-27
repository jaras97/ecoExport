'use client';

import { useForm } from 'react-hook-form';
import { Dictionary } from '../[lang]/dictionaries';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type GtagFunction = (
  event: string,
  action: string,
  params: {
    event_category?: string;
    event_label?: string;
    value?: number;
  },
) => void;

// Extiende la interfaz `Window` para incluir `gtag` con un tipo estricto
declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

export default function ContactSection({ dict }: { dict: Dictionary }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert(dict.contact.success);
        reset();
        if (window.gtag) {
          window.gtag('event', 'form_submission', {
            event_category: 'Contact Form',
            event_label: 'Contact Form Submission',
            value: 1,
          });
        }
      } else {
        alert(dict.contact.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert(dict.contact.error);
    }
  };

  return (
    <section id='contacto' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-5xl font-bold mb-8' data-aos='slide-up'>
          {dict.contact.title}
        </h2>
        <p
          className='text-2xl text-gray-700 mb-8'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {dict.contact.description}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid gap-4 max-w-md mx-auto'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <input
            {...register('name', { required: dict.contact.form.nameError })}
            type='text'
            placeholder={dict.contact.form.namePlaceholder}
            className='p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-xl'
          />
          {errors.name && (
            <p className='text-red-500 text-sm'>{errors.name.message}</p>
          )}

          <input
            {...register('email', {
              required: dict.contact.form.emailError.required,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: dict.contact.form.emailError.invalid,
              },
            })}
            type='email'
            placeholder={dict.contact.form.emailPlaceholder}
            className='p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-xl'
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}

          <textarea
            {...register('message', {
              required: dict.contact.form.messageError,
            })}
            placeholder={dict.contact.form.messagePlaceholder}
            rows={5}
            className='p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none text-xl'
          ></textarea>
          {errors.message && (
            <p className='text-red-500 text-sm'>{errors.message.message}</p>
          )}

          <button
            type='submit'
            data-aos='zoom-in'
            data-aos-delay='600'
            className='px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-medium text-xl'
          >
            {dict.contact.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
