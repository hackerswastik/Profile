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
    <div className="netflix-hero relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
              </pattern>
              <radialGradient id="glow" cx="50%" cy="0%" r="100%">
                <stop offset="0%" stopColor="rgba(229,9,20,0.3)" />
                <stop offset="50%" stopColor="rgba(229,9,20,0.1)" />
                <stop offset="100%" stopColor="rgba(0,0,0,0)" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="#0a0a0a" />
            <rect className="animate-grid" x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
            <rect x="0" y="0" width="100%" height="100%" fill="url(#glow)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
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

