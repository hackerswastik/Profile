import { useEffect } from 'react';

export function SEO() {
  useEffect(() => {
    const title = 'Swastik Srivastava — Senior Technical Consultant';
    const desc = 'Senior Technical Consultant • Java/Spring Boot • Full-Stack • Cloud';
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', desc);
  }, []);
  return null;
}

export function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

