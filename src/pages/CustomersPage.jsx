import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Customers } from "@/components/Customers";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CustomersPage = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80"
              alt="Business professionals shaking hands"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Our customers</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Trusted by industry leaders and innovators</h1>
              <p className="text-lg text-muted-foreground">
                We partner with enterprises across retail, finance, government, energy, and manufacturing—delivering
                measurable outcomes and lasting relationships.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <AnimatedSection>
            <Customers />
          </AnimatedSection>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <Card className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#031c3a] via-[#06356a] to-[#0852a4] text-white p-10 md:p-14 shadow-strong">
                <div className="grid gap-8 md:grid-cols-[1.2fr,0.8fr] items-center">
                  <div className="space-y-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">Need guidance?</p>
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                      Talk with our consultants today
                    </h2>
                    <p className="text-base md:text-lg text-white/80">
                      Whether you’re planning a cloud migration, strengthening cybersecurity posture, or rolling out ERP,
                      we’ll tailor a roadmap aligned with your goals.
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-[#00d2ff] to-[#00a6ff] hover:opacity-90 text-white font-semibold rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link to="/contact" className="flex items-center gap-3">
                        Schedule a call
                        <FontAwesomeIcon icon={faPhoneVolume} className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default CustomersPage;

