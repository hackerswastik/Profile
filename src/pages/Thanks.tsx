import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { siteConfig } from '@/data/site.config';

export default function Thanks() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto text-center glass p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-primary mb-4">Thank You!</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I appreciate you reaching out. I'll get back to you as soon as possible!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              ← Back to Profile
            </Link>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-green-500 text-white px-6 py-3 font-medium hover:bg-green-600 transition-colors w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.88 5.83L2.1 22l4.27-1.11C7.72 21.59 9.82 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.03 14.12l-1.38-.41c-.37-.11-.77.04-.93.38-.17.33-.48.67-.93.67-1.31 0-2.38-1.07-2.38-2.38 0-.45.13-.84.35-1.18.22-.34.53-.6.9-.75.37-.15.77-.19 1.16-.1l1.38.41c.31.09.64-.04.82-.31l1.73-2.69c.18-.28.13-.65-.11-.87-.78-.72-1.76-1.15-2.8-1.23-.37-.03-.73.05-1.07.22l-.76.39c-1.63.84-2.87 2.32-3.43 4.09-.57 1.77-.44 3.68.36 5.36.8 1.67 2.2 2.99 3.91 3.7 1.71.71 3.63.74 5.36.09l.76-.39c.34-.17.6-.46.73-.82.13-.36.11-.75-.06-1.09l-1.73-2.69c-.18-.27-.51-.4-.82-.31z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            You should receive a confirmation email shortly.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

