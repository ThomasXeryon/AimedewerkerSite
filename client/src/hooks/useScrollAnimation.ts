import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollPosition = () => {
      const position = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = position / maxScroll;
      
      setScrollY(position);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    updateScrollPosition();

    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  return { scrollY, scrollProgress };
}

export function useParallaxScroll(speed: number = 0.5) {
  const { scrollY } = useScrollAnimation();
  return scrollY * speed;
}

export function useScrollSection(threshold: number = 0.5) {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= threshold);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element, threshold]);

  return { isVisible, setElement };
}