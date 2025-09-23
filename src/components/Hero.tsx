import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/site.config';
import { ArrowRight, FileText, Mail } from 'lucide-react';

const variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const onContact = () => {
    const el = document.getElementById('contact');
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="netflix-hero">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/assets/profile.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />
      <div className="relative z-10 max-w-4xl">
        <motion.p 
          className="text-sm text-slate-500 dark:text-slate-300 mb-2"
          initial={prefersReducedMotion ? {} : variants.initial}
          animate={prefersReducedMotion ? {} : variants.animate}
          transition={variants.transition}
        >
          {siteConfig.location}
        </motion.p>
        <motion.h1 
          className="text-6xl font-bold mb-4 text-white"
          initial={prefersReducedMotion ? {} : variants.initial}
          animate={prefersReducedMotion ? {} : variants.animate}
          transition={{ ...variants.transition, delay: 0.1 }}
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p 
          className="text-2xl font-medium text-gray-200 mb-8"
          initial={prefersReducedMotion ? {} : variants.initial}
          animate={prefersReducedMotion ? {} : variants.animate}
          transition={{ ...variants.transition, delay: 0.2 }}
        >
          {siteConfig.title}
        </motion.p>
        <motion.p 
          className="mt-6 text-base text-slate-600 dark:text-slate-300"
          initial={prefersReducedMotion ? {} : variants.initial}
          animate={prefersReducedMotion ? {} : variants.animate}
          transition={{ ...variants.transition, delay: 0.3 }}
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-3"
          initial={prefersReducedMotion ? {} : variants.initial}
          animate={prefersReducedMotion ? {} : variants.animate}
          transition={{ ...variants.transition, delay: 0.4 }}
        >
          <a
            className="netflix-button flex items-center gap-2"
            href="#contact"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Get in touch
          </a>
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            View Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
}

