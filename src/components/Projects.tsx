import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { projects as data, Project } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <h2 className="section-title">Projects</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Selected work across back-end services and front-end apps.
      </p>
      <section className="netflix-section">
        <Slider {...settings}>
          {data.map((project) => (
            <div key={project.id} className="px-2">
              <div className="netflix-card">
                <img
                  src={project.image || '/assets/project-placeholder.jpg'}
                  alt={project.title}
                  className="w-full aspect-video object-cover rounded-md"
                />
                <div className="netflix-card-overlay p-4 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.blurb}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-white/20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="netflix-button text-sm"
                      >
                        View Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm bg-white/20 hover:bg-white/30 text-white px-4 py-1 rounded transition-colors"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div
            className="max-w-2xl w-full glass p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900">
              <img src={active.image} alt="" className="w-full h-full object-cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold">{active.title}</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">{active.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setActive(null)}
                className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

