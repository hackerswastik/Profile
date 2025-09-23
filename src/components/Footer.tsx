import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <p className="text-sm text-slate-600 dark:text-slate-300">© {year} Swastik Srivastava</p>
        <SocialLinks />
      </div>
    </footer>
  );
}

