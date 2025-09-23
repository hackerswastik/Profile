import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useAnalytics } from './lib/useAnalytics';

export default function App() {
  useAnalytics();

  useEffect(() => {
    // Ensure top on route enter
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-netflix-black text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4">
          <About />
          <Projects />
          <Skills />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
