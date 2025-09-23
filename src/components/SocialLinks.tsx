import { Github, Linkedin, Link } from 'lucide-react';
import { siteConfig } from '@/data/site.config';

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={siteConfig.social.linkedin}
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Linkedin size={18} />
      </a>
      <a
        href={siteConfig.social.github}
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Github size={18} />
      </a>
      <a
        href={siteConfig.topmate}
        target="_blank"
        rel="noopener"
        aria-label="Topmate"
        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <Link size={18} />
      </a>
    </div>
  );
}

