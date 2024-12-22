import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Cambia el servicio si usas otro proveedor
      auth: {
        user: process.env.EMAIL_USER, // Tu correo electrónico
        pass: process.env.EMAIL_PASS, // Tu contraseña o clave de aplicación
      },
    });

    // Contenido del correo
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVED,
      subject: 'Nuevo mensaje de contacto - EcoExport',
      text: `
        Nombre: ${name}
        Correo: ${email}
        Mensaje: ${message}
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { message: 'Hubo un error al enviar el correo' },
      { status: 500 }
    );
  }
}
