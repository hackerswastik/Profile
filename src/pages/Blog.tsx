import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <Section id="blog" className="pt-24">
        <h1 className="section-title">Blog</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">Coming soon. Stay tuned!</p>
        <Link to="/" className="mt-6 inline-block underline">
          ← Back to home
        </Link>
      </Section>
      <Footer />
    </div>
  );
}

