import { Project } from '@/data/projects';
import Badge from './Badge';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group text-left rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:border-primary dark:hover:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary p-6 transition-all duration-200 bg-white dark:bg-slate-900"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-xl flex-1 group-hover:text-primary transition-colors">{project.title}</h3>
          <div className="flex gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener" 
                aria-label="GitHub"
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener" 
                aria-label="Live demo"
                className="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{project.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </button>
  );
}

