import { LaptopMinimalCheck, ShieldAlert, ServerCog } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { Services } from "@/components/Services";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const serviceHighlights = [
  {
    title: "Consulting & Advisory",
    description:
      "Strategic workshops, technology roadmaps, and governance frameworks aligned with your business objectives.",
    icon: <LaptopMinimalCheck className="h-6 w-6" />,
    link: "/services/customer-journey",
  },
  {
    title: "Managed Services",
    description:
      "24/7 monitoring, incident response, and proactive maintenance delivered under measurable SLAs.",
    icon: <ServerCog className="h-6 w-6" />,
    link: "/services/managed-it-solutions",
  },
  {
    title: "Cyber Resilience",
    description:
      "From assessments to SOC operations, we help organizations meet compliance and defend against emerging threats.",
    icon: <ShieldAlert className="h-6 w-6" />,
    link: "/services/cybersecurity",
  },
];

const ServicesPage = () => {
  return (
    <MainLayout>
      <PageTransition>
        <section className="relative bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80"
              alt="Team planning IT services"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28">
            <AnimatedSection className="max-w-4xl text-center mx-auto space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Solutions</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Integrated services that keep your business always-on and secure
              </h1>
              <p className="text-lg text-muted-foreground">
                We design, implement, and operate technology that scales with your ambitions—from infrastructure and
                cloud to cybersecurity, governance, and digital experiences.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <AnimatedSection>
            <Services />
          </AnimatedSection>
        </section>

        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4">
            <AnimatedSection className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Choose the depth you need</h2>
              <p className="text-lg text-muted-foreground">
                Dive into detailed service pages or connect with us to architect a bespoke engagement.
              </p>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-3">
              {serviceHighlights.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <Card className="p-8 bg-card border-border/70 hover:border-accent/60 hover:shadow-xl transition-all">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.description}</p>
                    <Button asChild variant="ghost" className="group px-0">
                      <Link to={item.link}>
                        Explore service
                        <span className="inline-block ml-2 transform transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </Button>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ServicesPage;

