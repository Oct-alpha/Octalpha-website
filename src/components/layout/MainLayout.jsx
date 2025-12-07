import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";

const MainLayout = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export { MainLayout };

