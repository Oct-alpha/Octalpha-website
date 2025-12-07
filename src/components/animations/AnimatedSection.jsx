import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

const transforms = {
  up: "translateY(40px)",
  down: "translateY(-40px)",
  left: "translateX(40px)",
  right: "translateX(-40px)",
};

const AnimatedSection = ({ children, direction = "up", delay = 0, className }) => {
  const [ref, isVisible] = useReveal();
  const fallbackTransform = transforms[direction] ?? transforms.up;

  return (
    <div
      ref={ref}
      className={cn("will-change-transform", className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : fallbackTransform,
        transition: "opacity 0.7s ease, transform 0.7s ease",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export { AnimatedSection };

