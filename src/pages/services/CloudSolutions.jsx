import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Rocket, ArrowLeftRight, Lock, DatabaseZap, BoxSelect } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const CloudSolutions = () => {
  const services = [
    {
      icon: Cloud, // Core Cloud Service
      title: "Multi-Cloud Support",
      description: "Expert services for Azure, AWS, Oracle, and Google Cloud platforms.",
    },
    {
      icon: Rocket, // Optimization = Speed/Efficiency
      title: "Cost Optimization",
      description: "Right-sizing and scalability strategies to optimize cloud spending.",
    },
    {
      icon: ArrowLeftRight, // Migration = Moving back and forth
      title: "Cloud Migration",
      description: "Seamless migration of workloads from on-premises to cloud infrastructure.",
    },
    {
      icon: Lock, // Security = Lock
      title: "Cloud Security",
      description: "Cloud-native security, backup solutions, and compliance management.",
    },
    {
      icon: DatabaseZap, // DR = Fast Database recovery
      title: "Disaster Recovery",
      description: "Cloud-based backup and disaster recovery solutions for business continuity.",
    },
    {
      icon: BoxSelect, // Containerization = Box/Container
      title: "Containerization",
      description: "Modern application deployment using containers and orchestration.",
    },
  ];

  const cloudProviders = [
    {
      name: "Microsoft Azure",
      features: ["Enterprise Integration", "Hybrid Cloud", "AI & ML Services", "DevOps Tools"],
    },
    {
      name: "Amazon AWS",
      features: ["Global Infrastructure", "Compute Power", "Storage Solutions", "Serverless"],
    },
    {
      name: "Google Cloud",
      features: ["Data Analytics", "Machine Learning", "Kubernetes Engine", "BigQuery"],
    },
    {
      name: "Oracle Cloud",
      features: ["Database Services", "Enterprise Apps", "Autonomous DB", "Cloud@Customer"],
    },
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
              alt="Cloud technology concept"
              className="h-full w-full object-cover opacity-30"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Cloud Solutions</h1>
              <p className="text-xl text-primary-foreground/80">
                Transform your business with scalable, secure, and cost-effective cloud infrastructure.
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
                    <AnimatedSection key={service.title} delay={index * 0.05}>
                      <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Cloud Platforms We Support</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {cloudProviders.map((provider, index) => (
                  <AnimatedSection key={provider.name} delay={index * 0.1}>
                    <Card className="p-8 hover:shadow-xl transition-all duration-500">
                      <h3 className="text-2xl font-bold text-foreground mb-6">{provider.name}</h3>
                      <ul className="space-y-3">
                        {provider.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary relative overflow-hidden text-center">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">Ready to Move to the Cloud?</h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Our cloud experts will help you choose the right platform, migrate seamlessly, and optimize costs.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule Cloud Consultation
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

export default CloudSolutions;