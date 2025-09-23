import React from 'react';
import { siteConfig } from '@/data/site.config';

export default function About() {
  return (
    <section className="netflix-section">
      <div className="max-w-4xl mx-auto">
        <h2 className="netflix-title">About Me</h2>
        <div className="bg-netflix-dark-gray p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/assets/profile.jpg"
                alt="Swastik Srivastava"
                className="w-full rounded-md shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Swastik 👋</h3>
              <p className="text-gray-300 mb-4">
                I'm a Senior Technical Consultant with over 5 years of experience in software development.
                I specialize in Java/Spring Boot, modern web frameworks, and cloud technologies.
              </p>
              <p className="text-gray-300 mb-6">
                My passion lies in building scalable, efficient applications and sharing knowledge with
                the developer community through mentoring and technical content creation.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.linkedin.com/in/swastik-srivastava/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="netflix-button text-sm"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href="https://github.com/hackerswastik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded text-sm transition-colors"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

