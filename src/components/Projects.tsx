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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    arrows: true,
    className: "netflix-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
        <p className="text-xl text-gray-400 mb-8">
          Explore my latest work and technical achievements
        </p>
      </div>
      <div className="netflix-section relative -mx-4">
        <Slider {...settings}>
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={() => setActive(project)} />
          ))}
        </Slider>
      </div>

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

