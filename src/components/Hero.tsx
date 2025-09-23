import { motion, useReducedMotion } from 'framer-motion';
import { siteConfig } from '@/data/site.config';
import { ArrowRight, FileText, Mail } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "tween",
      ease: "easeOut",
      duration: 0.4
    }
  }
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
          backgroundImage: `url(/assets/banner-1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />
      <motion.div 
        className="relative z-10 max-w-4xl"
        initial={prefersReducedMotion ? false : "hidden"}
        animate={prefersReducedMotion ? false : "show"}
        variants={container}
      >
        <motion.p 
          className="text-sm text-slate-500 dark:text-slate-300 mb-2"
          variants={item}
        >
          {siteConfig.location}
        </motion.p>
        <motion.h1 
          className="text-6xl font-bold mb-4 text-white"
          variants={item}
        >
          {siteConfig.name}
        </motion.h1>
        <motion.p 
          className="text-2xl font-medium text-gray-200 mb-8"
          variants={item}
        >
          {siteConfig.title}
        </motion.p>
        <motion.p 
          className="mt-6 text-base text-slate-600 dark:text-slate-300"
          variants={item}
        >
          {siteConfig.hero.subheadline}
        </motion.p>

        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-3"
          variants={item}
        >
          <a
            href={siteConfig.resumeUrl}
            className="netflix-button flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={20} />
            {siteConfig.hero.ctaResume}
          </a>
          <a
            href={siteConfig.topmate}
            className="netflix-button flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowRight size={20} />
            {siteConfig.hero.ctaTopmate}
          </a>
          <button onClick={onContact} className="netflix-button flex items-center gap-2">
            <Mail size={20} />
            {siteConfig.hero.ctaContact}
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

