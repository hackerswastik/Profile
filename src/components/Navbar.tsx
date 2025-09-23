import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollSpy } from '@/lib/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(['about', 'projects', 'skills', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-netflix-black' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-netflix-red text-3xl font-bold">
              SS
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'about'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </a>
              <a
                href="#projects"
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'projects'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Projects
              </a>
              <a
                href="#skills"
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'skills'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Skills
              </a>
              <a
                href="#contact"
                className={`text-sm font-medium transition-colors ${
                  activeSection === 'contact'
                    ? 'text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="netflix-button text-sm hidden sm:block"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

