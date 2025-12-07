import { Card } from "@/components/ui/card";
import { Users, Zap, Shield, TrendingUp, Award, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Multi-disciplinary Expertise",
      description: "IT infrastructure, Cloud, cybersecurity, GRC, data center solutions, and managed services.",
    },
    {
      icon: Zap,
      title: "Flexible Engagement Models",
      description: "Project-based, AMC, or service contracts tailored to your business needs.",
    },
    {
      icon: Shield,
      title: "Expert Technical Team",
      description: "Certified engineers and consultants with deep cross-industry knowledge.",
    },
    {
      icon: TrendingUp,
      title: "Vendor-Agnostic Approach",
      description: "We recommend solutions based on your needs, not tied to one brand.",
    },
    {
      icon: Award,
      title: "UAE Compliance Expertise",
      description: "Deep understanding of NESA, PCI DSS, ISO 27001, and regional frameworks.",
    },
    {
      icon: Globe,
      title: "Proven Regional Experience",
      description: "Over 10 years delivering IT transformation across GCC markets.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Octalpha?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted technology partner for business growth
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <AnimatedSection key={reason.title} delay={index * 0.05}>
                <Card className="p-6 hover:shadow-medium transition-all duration-500 group hover:-translate-y-1">
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Key Benefits Banner */}
        <AnimatedSection>
          <Card className="p-8 md:p-12 bg-gradient-hero shadow-strong">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-6">
                Competitive Pricing. Rapid Deployment. Exceptional Quality.
              </h3>
              <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
                Instead of managing vendors, you manage growth. Leveraging strong distributor ties for rapid procurement
                and deployment without compromising on quality or timelines.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                {["10+ Years Experience", "50+ Enterprise Clients", "Local UAE Presence"].map((item, index) => (
                  <AnimatedSection key={item} delay={0.1 * index} className="inline-flex">
                    <div className="px-6 py-3 bg-card/20 backdrop-blur-sm rounded-lg border border-primary-foreground/20">
                      <span className="text-primary-foreground font-semibold">{item}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};
