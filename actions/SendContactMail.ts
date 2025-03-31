'use server'

import nodemailer from 'nodemailer';
import { sendContactEmailSchema, SendContactEmailSchemaType } from "@/schema/contact-form";

export async function SendContactEmail(form: SendContactEmailSchemaType) {
  const { success, data } = sendContactEmailSchema.safeParse(form);

  if (!success) {
    throw new Error('Invalid form data');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `Portfolio Contact Form from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });
  } catch {
    console.error("Error while sending email to:", data.email)
  }
}