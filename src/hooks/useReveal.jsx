import { useEffect, useRef, useState } from "react";

const useReveal = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, ...options },
    );

    const node = elementRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [elementRef, isVisible];
};

export { useReveal };

