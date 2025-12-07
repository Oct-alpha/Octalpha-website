import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const PageTransition = ({ children, className }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div
      className={cn("min-h-screen flex-1", className)}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "none" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
};

export { PageTransition };

