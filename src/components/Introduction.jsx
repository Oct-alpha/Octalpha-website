import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const Introduction = () => {
  const highlights = [
    "Strategic vendor alliances",
    "Strong local UAE presence",
    "Expert-driven agile team",
    "High-impact solutions",
    "Personalized service",
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Octalpha Business Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          <AnimatedSection>
            <Card className="p-8 md:p-12 shadow-medium">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Octalpha Business Solutions</span> is a UAE-based technology partner
                focused on enabling businesses through intelligent and secure IT solutions for the past 10 years.
              </p>
              
              <p>
                We have helped various organizations scale faster and smarter with tailored services in IT
                infrastructure, cybersecurity, data center support, cloud enablement, compliance and managed services.
              </p>

              <p>
                Backed by strategic vendor alliances and a strong local presence, we deliver high-impact,
                cost-effective solutions — from office IT setups and networking to complex enterprise-level integrations.
              </p>

              <p>
                Our lean, expert-driven team ensures agility, accountability, and personalized service for every project.
              </p>

                <div className="pt-6 border-t border-border mt-8">
                  <p className="text-xl font-semibold text-foreground mb-6">
                    At Octalpha, we don't just supply IT — we deliver:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <AnimatedSection key={item} delay={index * 0.05} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">{item}</span>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>

                <AnimatedSection delay={0.3}>
                  <div className="bg-gradient-primary p-6 rounded-lg mt-8">
                    <p className="text-xl font-bold text-primary-foreground text-center">
                      Business Continuity • Operational Efficiency • Technology-Led Growth
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
