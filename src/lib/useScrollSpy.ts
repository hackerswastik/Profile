import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-60% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
        ...options,
      },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options]);

  return active;
}

