import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Router, Cable, Building2, Layers } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const ITInfrastructure = () => {
  const services = [
    {
      icon: Server,
      title: "Servers",
      description: "Enterprise-grade server solutions designed for reliability and performance.",
    },
    {
      icon: HardDrive,
      title: "Storage",
      description: "Scalable storage solutions with high availability and data protection.",
    },
    {
      icon: Router, // Changed from Network to Router for specificity
      title: "Networking",
      description: "Robust network infrastructure with switches, routers, and security appliances.",
    },
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional cabling infrastructure for seamless connectivity.",
    },
    {
      icon: Building2, // Changed from Database to Building2 to represent the physical 'Building'
      title: "Data Center Building",
      description: "Complete data center design and implementation including racks, UPS, cooling, and monitoring.",
    },
    {
      icon: Layers,
      title: "Virtualization",
      description: "Hypervisors, business applications, and licensing management.",
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
              alt="Data center infrastructure"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                IT Infrastructure Solutions
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Complete infrastructure solutions from design to implementation, ensuring business continuity and optimal
                performance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <AnimatedSection key={service.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="mt-16 p-8 md:p-12 bg-gradient-primary relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative text-center text-primary-foreground">
                    <h2 className="text-3xl font-bold mb-6">Why Choose Our IT Infrastructure Services?</h2>
                    <div className="grid md:grid-cols-2 gap-6 text-primary-foreground/90 text-left">
                      <div>
                        <h3 className="font-semibold mb-2">✓ IT Infrastructure Design &amp; Implementation</h3>
                        <p className="text-sm">Tailored solutions that align with your business goals.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">✓ Cloud Solutions</h3>
                        <p className="text-sm">Azure, AWS, Oracle, Google—with cost optimization &amp; scalability.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">✓ Disaster Recovery &amp; Backup</h3>
                        <p className="text-sm">Comprehensive business continuity planning.</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">✓ IT Monitoring</h3>
                        <p className="text-sm">24/7 proactive monitoring and maintenance.</p>
                      </div>
                    </div>
                    <div className="text-center mt-10">
                      <Button variant="cta" size="lg">
                        Request a Consultation
                      </Button>
                    </div>
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

export default ITInfrastructure;