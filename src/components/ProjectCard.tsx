import { Project } from '@/data/projects';
import Badge from './Badge';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="netflix-card group cursor-pointer"
      style={{ margin: '0 8px' }}
    >
      <div className="aspect-video relative overflow-hidden rounded-md">
        <img
          src={project.image || '/assets/project1.svg'}
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
        <div className="netflix-card-overlay">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 mb-2 line-clamp-2">{project.blurb}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tech.slice(0, 3).map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener" 
                  aria-label="GitHub"
                  className="text-white hover:text-netflix-red transition-colors"
                  onClick={(e) => e.stopPropagation()}
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
                  className="text-white hover:text-netflix-red transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

