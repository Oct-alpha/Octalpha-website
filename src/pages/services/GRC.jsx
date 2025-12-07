import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileCheck, AlertTriangle, CheckCircle2, Shield } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageTransition } from "@/components/animations/PageTransition";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

const GRC = () => {
  const pillars = [
    {
      icon: FileCheck,
      title: "Governance",
      description: "Establishing corporate policies, IT governance models, and decision-making frameworks aligned with ISO/IEC best practices.",
      benefits: ["IT strategies aligned with business goals", "Clear accountability frameworks", "Structured decision-making processes"],
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Identification, assessment, and mitigation of IT & cybersecurity risks.",
      benefits: ["Business continuity planning", "Disaster recovery strategies", "Vendor risk management", "Proactive threat mitigation"],
    },
    {
      icon: CheckCircle2,
      title: "Compliance",
      description: "Advisory & audit services to ensure adherence to mandatory local & international standards.",
      benefits: ["Regulatory compliance assurance", "Audit preparation support", "Certification assistance", "Continuous compliance monitoring"],
    },
  ];

  const frameworks = [
    "ISO 27001 (Information Security Management)",
    "ISO 27701 (Privacy Information Management)",
    "GDPR (General Data Protection Regulation)",
    "UAE PDPL (Personal Data Protection Law)",
    "NIST Cybersecurity Framework",
    "ISO 22301 (Business Continuity)",
    "PCI-DSS (Payment Card Industry)",
    "HIPAA (Healthcare)",
    "ISO 45001 & ISO 9001",
    "NESA UAE IAS (Information Assurance Standards)",
    "CBUAE Regulations",
  ];

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-20">
          <div className="absolute inset-0">
            {/* UPDATED BACKGROUND: Abstract Tech/Security/Structure */}
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80"
              alt="Governance and compliance review"
              className="h-full w-full object-cover opacity-25"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]" />
          <div className="container relative z-10 mx-auto px-4">
            <AnimatedSection direction="up" className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
                Governance, Risk &amp; Compliance (GRC)
              </h1>
              <p className="text-xl text-primary-foreground/80">
                Comprehensive GRC services to ensure your organization meets regulatory requirements and manages risks
                effectively.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <AnimatedSection className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">The Three Pillars of GRC</h2>
                <div className="w-24 h-1 bg-gradient-accent mx-auto" />
              </AnimatedSection>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {pillars.map((pillar, index) => {
                  const Icon = pillar.icon;
                  return (
                    <AnimatedSection key={pillar.title} delay={index * 0.05} className="h-full">
                      <Card className="h-full flex flex-col p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                        <div className="p-3 bg-gradient-primary rounded-lg inline-block mb-4 shadow-md w-fit">
                          <Icon className="h-8 w-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-4">{pillar.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">{pillar.description}</p>
                        <div className="space-y-2">
                          {pillar.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </AnimatedSection>
                  );
                })}
              </div>

              <AnimatedSection>
                <Card className="p-8 md:p-12 bg-muted/50 mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                    GRC Frameworks &amp; Standards We Support
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {frameworks.map((framework) => (
                      <div key={framework} className="flex items-start gap-3 p-4 bg-card rounded-lg">
                        <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{framework}</span>
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
                      Ready to Strengthen Your Compliance Posture?
                    </h2>
                    <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                      Our GRC experts can help you automate compliance, reduce risk, and prepare for audits.
                    </p>
                    <Button variant="cta" size="lg">
                      Request GRC Assessment
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

export default GRC;