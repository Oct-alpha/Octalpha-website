import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const variantClasses = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  hero: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md hover:shadow-lg transition-all",
  cta: "bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-md hover:shadow-xl transition-all",
};

const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10 p-0",
};

const Button = forwardRef(function Button(
  { variant = "default", size = "default", className, type = "button", asChild = false, ...props },
  ref,
) {
  const Component = asChild ? Slot : "button";
  const componentProps = {
    ref,
    className: cn(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      sizeClasses[size] ?? sizeClasses.default,
      variantClasses[variant] ?? variantClasses.default,
      className,
    ),
    ...props,
  };

  if (!asChild) {
    componentProps.type = type;
  }

  return (
    <Component {...componentProps} />
  );
});

export { Button };

