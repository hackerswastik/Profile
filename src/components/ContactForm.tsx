import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactInput } from '@/lib/validators';
import { useNavigate } from 'react-router-dom';
import { siteConfig } from '@/data/site.config';
// import axios from 'axios'; // Alternative: use /api/contact

export default function ContactForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactInput) => {
    try {
      if (!values.name || !values.email || !values.message) {
        alert('Please fill in all required fields');
        return;
      }

      // Then send to Google Sheets via a form submit
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://script.google.com/macros/s/AKfycbxpk4wZVccyKKFDBgcs65_TfLrNgkaR9uxWU2BYF0m6EVNMRt-u2NIbfnbhudORgXZnmQ/exec';
      form.target = 'hidden_iframe';

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'data';
      input.value = JSON.stringify({
        ...values,
        timestamp: new Date().toISOString()
      });
      form.appendChild(input);

      // Create hidden iframe for the form submission
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      document.body.appendChild(form);

      form.submit();

      // Clean up the form and iframe after submission
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        reset();
        navigate('/thanks');
      }, 1000);
    
    } catch (err) {
      console.error('Contact form error:', err);
      alert('Your message was received but there might have been an issue. Please check your email for confirmation.');
    }
  };

  return (
    <div className="max-w-2xl">
      <h2 className="section-title">Contact</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        I’d love to hear about your project or role.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 glass p-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            inputMode="email"
            {...register('email')}
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject (optional)</label>
          <input
            id="subject"
            type="text"
            {...register('subject')}
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900 px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
          />
          {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 font-medium disabled:opacity-60"
          >
            {isSubmitting ? 'Sending…' : 'Send message'}
          </button>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-green-500 text-white px-4 py-2 font-medium hover:bg-green-600 transition-colors"
          >
            Chat on WhatsApp
          </a>
          <a
            className="text-sm text-slate-600 dark:text-slate-300 underline"
            href={`mailto:${siteConfig.email}`}
            target="_blank"
            rel="noopener"
          >
            Or email directly
          </a>
        </div>
        {isSubmitSuccessful && (
          <p className="text-sm text-green-600">Message sent! Redirecting…</p>
        )}
      </form>
    </div>
  );
}

