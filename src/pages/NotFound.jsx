import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <PageTransition>
        <section className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-muted/40">
          <AnimatedSection direction="up" className="text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-border bg-card px-4 py-2 text-sm uppercase tracking-[0.35em] text-muted-foreground">
              404
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">We couldn’t find that page</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The page you are looking for might have been moved or no longer exists. Try navigating from the main
              sections below.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="cta">
                <Link to="/">Back to Home</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </AnimatedSection>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default NotFound;
