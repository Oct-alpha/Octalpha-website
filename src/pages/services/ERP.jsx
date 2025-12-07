import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, UserCheck, Truck, LineChart, BrainCircuit, Factory, AppWindow } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const ERP = () => {
  const modules = [
    {
      icon: Calculator, // Financial = Accounting tool
      title: "Financial Management",
      description: "Complete financial operations including accounting, budgeting, and reporting.",
    },
    {
      icon: UserCheck, // HR = Verified User/Employee
      title: "Human Resources",
      description: "HR management, payroll, employee records, and performance tracking.",
    },
    {
      icon: Truck, // Supply Chain = Logistics/Transport
      title: "Supply Chain Management",
      description: "Inventory, procurement, warehouse management, and logistics.",
    },
    {
      icon: LineChart, // Sales = Growth Chart
      title: "Sales & CRM",
      description: "Sales automation, customer relationship management, and pipeline tracking.",
    },
    {
      icon: BrainCircuit, // BI = Intelligence/AI
      title: "Business Intelligence",
      description: "Real-time analytics, dashboards, and data-driven decision making.",
    },
    {
      icon: Factory, // Manufacturing = Factory Building
      title: "Manufacturing",
      description: "Production planning, quality control, and shop floor management.",
    },
  ];

  const benefits = [
    "Integrated business processes across departments",
    "Real-time visibility into operations",
    "Improved efficiency and productivity",
    "Better decision making with accurate data",
    "Reduced operational costs",
    "Scalable solutions that grow with your business",
    "Compliance with regulatory requirements",
    "Enhanced customer satisfaction",
  ];

  const solutions = [
    "SAP Business One",
    "Microsoft Dynamics 365",
    "Oracle NetSuite",
    "Odoo ERP",
    "Custom ERP Solutions",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
              alt="ERP analytics dashboard meeting"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Enterprise Resource Planning (ERP)
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Streamline your business operations with integrated ERP solutions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">ERP Modules &amp; Capabilities</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {modules.map((module, index) => {
                  const Icon = module.icon;
                  return (
                    <AnimatedSection key={module.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{module.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-grow">{module.description}</p>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <AnimatedSection className="h-full">
                  <Card className="p-8 bg-muted/50 h-full">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>

                <AnimatedSection className="h-full">
                  <Card className="p-8 bg-muted/50 h-full">
                    <h3 className="text-2xl font-bold text-foreground mb-6">ERP Solutions We Implement</h3>
                    <ul className="space-y-4">
                      {solutions.map((solution) => (
                        <li key={solution} className="flex items-center gap-3 p-3 bg-card rounded-lg">
                          <AppWindow className="h-5 w-5 text-accent" />
                          <span className="text-foreground font-medium">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Transform Your Business with ERP
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Our ERP experts will help you select, implement, and optimize the right solution for your business
                      needs.
                    </p>
                    <Button variant="cta" size="lg">
                      Schedule ERP Consultation
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

export default ERP;