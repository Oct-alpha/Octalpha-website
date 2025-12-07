import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Bot, 
  Layers, 
  Users, 
  GitBranch, 
  Globe, 
  Smile, 
  Activity, 
  ShieldCheck, 
  Cloud, 
  CheckCircle2
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const AIGRCAutomation = () => {
  // Data for the Features Grid
  // Removed "Affordability" card and generalized descriptions
  const features = [
    {
      icon: Layers,
      title: "Unified Platform",
      description: "Combines GRC, risk management, incident response, asset inventory, and vendor management in one interface.",
    },
    {
      icon: Users,
      title: "Built for MSSPs",
      description: "Native multi-tenant design makes it easier to manage multiple clients from one dashboard — ideal for service providers.",
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Automates risk assessments, policy workflows, compliance tasks, and alerts using AI and rule-based logic.",
    },
    {
      icon: GitBranch,
      title: "Custom Workflows",
      description: "Highly configurable workflows for risk, audit, and compliance processes that fit various industries perfectly.",
    },
    {
      icon: Globe,
      title: "Local Regulation Mapping",
      description: "Includes frameworks for regional laws (e.g., SAMA, NESA, NCA ECC, QCB) — a big plus over global tools.",
    },
    {
      icon: Smile,
      title: "Intuitive UI",
      description: "Easier learning curve compared to complex legacy platforms, ensuring rapid team adoption.",
    },
    {
      icon: Activity,
      title: "Continuous Monitoring",
      description: "Real-time dashboards and alerts for risk and compliance gaps, keeping you constantly informed.",
    },
    {
      icon: ShieldCheck,
      title: "Third-Party Risk Management",
      description: "Robust native capabilities for vendor onboarding, risk scoring, and compliance checks.",
    },
    {
      icon: Cloud,
      title: "Deployment Flexibility",
      description: "Offers both SaaS and on-prem deployment – a critical requirement for government and regulated sectors.",
    },
  ];

  // Converted Table Data into Advantages List
  const advantages = [
    "Intuitive UI with a low learning curve",
    "Built-in support for regional standards (SAMA, NESA, etc.)",
    "Native multi-client management capabilities",
    "Smart workflows and AI-driven risk scoring",
    "Flexible Cloud & On-Premise deployment options",
    "Open API architecture for seamless integrations",
    "Highly customizable workflows to fit your process",
    "Direct vendor support and growing resource library",
  ];

  return (
    <MainLayout>
      <PageTransition>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            {/* Background Image: Technology / Automation / GRC Theme */}
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
              alt="AI GRC Automation"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                AI-Powered GRC Automation
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Streamline compliance, manage risks, and automate workflows with our intelligent, localized GRC platform.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              
              {/* Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <AnimatedSection key={feature.title} delay={index * 0.05} className="h-full">
                      <Card className="p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col">
                        <div className="w-14 h-14 p-3 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-md flex-shrink-0">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              {/* Advantages Grid Card (Replaced Table) */}
              <AnimatedSection className="mb-20">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Our Platform?</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Experience an agile, localized, and MSSP-friendly alternative to traditional GRC suites.
                  </p>
                </div>

                <Card className="p-8 md:p-12 bg-muted/50 border-border/50 shadow-lg">
                  <div className="grid md:grid-cols-2 gap-6">
                    {advantages.map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-background/50 transition-colors">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              {/* CTA Section */}
              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-gradient-primary text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_65%)]" />
                  <div className="relative">
                    <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                      Ready to Modernize Your GRC?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Experience the difference of an AI-powered, locally compliant platform designed for today's threats.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button variant="cta" size="lg">
                        Request a Demo
                      </Button>
                      <Button variant="outline" size="lg" className="bg-background/10 text-primary-foreground border-primary-foreground/20 hover:bg-background/20 hover:text-white">
                        Contact Sales
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

export default AIGRCAutomation;