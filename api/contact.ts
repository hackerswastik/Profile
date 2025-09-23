// Vercel Serverless Function: /api/contact
// To enable: switch the ContactForm to POST to '/api/contact' instead of Formspree.
// Requires env vars: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM
import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'swastiksrivastava11@gmail.com', // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: 'swastiksrivastava11@gmail.com',
      to: 'swastiksrivastava11@gmail.com',
      subject: subject ? `[Portfolio] ${subject}` : '[Portfolio] New message',
      replyTo: email,
      text: `From: ${name} <${email}>
\nMessage:\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    });
    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

