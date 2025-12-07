import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headset, Wrench, RefreshCcw, BarChart4, UserCog, FileSignature, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const ManagedITSolutions = () => {
  const services = [
    {
      icon: Headset, // Remote Support = Headset
      title: "Remote & Onsite Support",
      description: "24/7 technical support with quick response times from our local UAE team.",
    },
    {
      icon: Wrench, // Maintenance = Wrench
      title: "Proactive Maintenance",
      description: "Regular system maintenance and patching to prevent issues before they impact your business.",
    },
    {
      icon: RefreshCcw, // Backup/Restore = Refresh Cycle
      title: "Backup & DR Management",
      description: "Comprehensive backup solutions and disaster recovery planning for business continuity.",
    },
    {
      icon: BarChart4, // Asset Management = Chart/Tracking
      title: "IT Asset Management",
      description: "Complete IT asset and license management to control costs and ensure compliance.",
    },
    {
      icon: UserCog, // Expert Engineers = User + Gear
      title: "Expert Engineers",
      description: "Certified resident and in-house engineers with multi-technology expertise.",
    },
    {
      icon: FileSignature, // Contracts = Signature
      title: "Annual Maintenance Contracts",
      description: "Flexible AMC options for completed IT systems with predictable costs and SLAs.",
    },
  ];

  const benefits = [
    "Predictable IT costs with flexible SLAs",
    "Minimized downtime through proactive monitoring",
    "Improved user productivity with faster issue resolution",
    "Access to certified experts without increasing headcount",
    "Scalable services to match business growth",
    "Local UAE presence with quick response times",
    "Multi-technology expertise (servers, cloud, security, AV, ELV)",
    "Experience supporting 50+ enterprise clients",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80"
              alt="Managed IT support team"
              className="h-full w-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Managed IT Solutions</h1>
              <p className="text-xl text-primary-foreground/80">
                Focus on your business while we manage your IT infrastructure with expert care.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
                      <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="w-14 h-14 p-3 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-md flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-muted/50 mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Benefits to Your Business</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Ready to Optimize Your IT Operations?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Let our expert team handle your IT infrastructure so you can focus on growing your business.
                    </p>
                    <Button variant="cta" size="lg">
                      Request AMC Proposal
                    </Button>
                  </div>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
};

export default ManagedITSolutions;