import { useEffect } from 'react';

// Minimal analytics loader — supports Google Analytics or Plausible via env
// Set VITE_GTAG_ID or VITE_PLAUSIBLE_DOMAIN
export function useAnalytics() {
  useEffect(() => {
    const gtagId = import.meta.env.VITE_GTAG_ID as string | undefined;
    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;

    if (gtagId) {
      const s = document.createElement('script');
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
      document.head.appendChild(s);
      const inline = document.createElement('script');
      inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gtagId}');`;
      document.head.appendChild(inline);
    }

    if (plausibleDomain) {
      const s = document.createElement('script');
      s.defer = true as any;
      s.setAttribute('data-domain', plausibleDomain);
      s.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(s);
    }
  }, []);
}

