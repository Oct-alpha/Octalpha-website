import { useEffect, useRef, useState } from "react";

const useReveal = (threshold = 0.15) => {
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
      { threshold },
    );

    const node = elementRef.current;
    if (node) observer.observe(node);

    return () => observer.disconnect();
  }, [threshold]); // ← stable primitive, not a new object every render

  return [elementRef, isVisible];
};

export { useReveal };